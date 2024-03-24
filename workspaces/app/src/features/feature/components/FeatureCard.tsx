import { Suspense } from 'react';
import { styled } from 'styled-components';

import type { GetBookResponse } from '@wsh-2024/schema/src/api/books/GetBookResponse';

import { Flex } from '../../../foundation/components/Flex';
import { SuspenseImage } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Text } from '../../../foundation/components/Text';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const _Wrapper = styled(Link)`
  display: grid;
  gap: ${Space * 1}px;
  background-color: ${Color.MONO_A};
  padding: ${Space * 1.5}px;
  border-radius: ${Radius.SMALL};
  grid-template-columns: auto 1fr;
  flex-shrink: 0;
  border: 1px solid ${Color.MONO_30};
`;

const _ImgWrapper = styled.div`
  width: 96px;
  height: 96px;
  > img {
    border-radius: ${Radius.SMALL};
  }
`;

const _ContentWrapper = styled.div`
  display: grid;
  gap: ${Space * 1}px;
  max-width: 200px;
  width: 100%;
`;

const _AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  > img {
    border-radius: 50%;
  }
`;

type Props = {
  book: Omit<GetBookResponse, 'nameRuby'>;
};

const FeatureCard: React.FC<Props> = ({ book }) => {
  return (
    <_Wrapper href={`/books/${book.id}`}>
      <_ImgWrapper>
        <SuspenseImage alt={book.image.alt} height={96} imageId={book.image.id} objectFit="cover" width={96} />
      </_ImgWrapper>

      <_ContentWrapper>
        <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
          {book.name}
        </Text>
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL14}>
          {book.description}
        </Text>

        <Flex align="center" gap={Space * 1} justify="flex-end">
          <_AvatarWrapper>
            <SuspenseImage
              alt={book.author.name}
              height={32}
              imageId={book.author.image.id}
              objectFit="cover"
              width={32}
            />
          </_AvatarWrapper>
          <Text color={Color.MONO_100} typography={Typography.NORMAL14}>
            {book.author.name}
          </Text>
        </Flex>
      </_ContentWrapper>
    </_Wrapper>
  );
};

const FeatureCardWithSuspense: React.FC<Props> = (props) => {
  return (
    <Suspense fallback={<p>load中だよ</p>}>
      <FeatureCard {...props} />
    </Suspense>
  );
};

export { FeatureCardWithSuspense as FeatureCard };
