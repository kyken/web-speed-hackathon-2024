import { Suspense } from 'react';
import { styled } from 'styled-components';

import type { GetBookResponse } from '@wsh-2024/schema/src/api/books/GetBookResponse';

import { Flex } from '../../../foundation/components/Flex';
import { SuspenseImage } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Text } from '../../../foundation/components/Text';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const _Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: ${Radius.SMALL};
  background-color: ${Color.MONO_A};
  max-width: 192px;
  border: 1px solid ${Color.MONO_30};
`;

const _ImgWrapper = styled.div`
  > img {
    border-radius: ${Radius.SMALL} ${Radius.SMALL} 0 0;
  }
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

const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <_Wrapper href={`/books/${book.id}`}>
      <_ImgWrapper>
        <SuspenseImage alt={book.image.alt} height={128} imageId={book.image.id} objectFit="cover" width={192} />
      </_ImgWrapper>

      <Flex align="stretch" direction="column" flexGrow={1} gap={Space * 1} justify="space-between" p={Space * 2}>
        <Text color={Color.MONO_100} typography={Typography.NORMAL14} weight="bold">
          {book.name}
        </Text>

        <Flex align="center" gap={Space * 1} justify="flex-end">
          <_AvatarWrapper>
            <SuspenseImage
              alt={book.image.alt}
              height={32}
              imageId={book.author.image.id}
              objectFit="cover"
              width={32}
            />
          </_AvatarWrapper>
          <Text color={Color.MONO_100} typography={Typography.NORMAL12}>
            {book.author.name}
          </Text>
        </Flex>
      </Flex>
    </_Wrapper>
  );
};

const BookCardWithSuspense: React.FC<Props> = (props) => {
  return (
    <Suspense fallback={'loading'}>
      <BookCard {...props} />
    </Suspense>
  );
};

export { BookCardWithSuspense as BookCard };
