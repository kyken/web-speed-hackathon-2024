import type * as CSS from 'csstype';
import { Suspense } from 'react';
import styled from 'styled-components';

import { addUnitIfNeeded } from '../../lib/css/addUnitIfNeeded';
import { useImage } from '../hooks/useImage';

const _Image = styled.img<{
  $height: number | string;
  $objectFit: string;
  $width: number | string;
}>`
  object-fit: ${({ $objectFit }) => $objectFit};
  width: ${({ $width }) => addUnitIfNeeded($width)};
  height: ${({ $height }) => addUnitIfNeeded($height)};
  display: block;
`;

type Props = {
  height: number | string;
  objectFit: CSS.Property.ObjectFit;
  width: number | string;
} & JSX.IntrinsicElements['img'];

type PropsWithFetch = Props & { imageId: string };

export const Image: React.FC<Props> = ({ height, loading = 'lazy', objectFit, width, ...rest }) => {
  return <_Image {...rest} $height={height} $objectFit={objectFit} $width={width} loading={loading} />;
};

export const ImageWithFetch: React.FC<PropsWithFetch> = ({ height, imageId, width, ...rest }) => {
  const imageUrl = useImage({ height: Number(height), imageId, width: Number(width) });
  if (!imageUrl) {
    return <div style={{ background: 'grey', height, width }} />;
  }
  return <Image {...rest} height={height} src={imageUrl} width={width} />;
};

export const SuspenseImage: React.FC<Omit<PropsWithFetch, 'imageId'> & { imageId: undefined | string }> = ({
  imageId,
  ...rest
}) => {
  const { height, width } = { ...rest };
  if (!imageId) {
    return <div style={{ background: 'grey', height, width }} />;
  }
  return (
    <Suspense fallback={<div style={{ background: 'grey', height, width }} />}>
      <ImageWithFetch {...rest} imageId={imageId} />
    </Suspense>
  );
};
