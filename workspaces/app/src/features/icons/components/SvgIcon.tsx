import ArrowBack from '@mui/icons-material/ArrowBack';
import Close from '@mui/icons-material/Close';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Search from '@mui/icons-material/Search';

type Props = {
  color: string;
  height: number;
  type: 'ArrowBack' | 'NavigateNext' | 'Close' | 'Search' | 'Favorite' | 'FavoriteBorder';
  width: number;
};

export const SvgIcon: React.FC<Props> = ({ color, height, type, width }) => {
  let Icon;
  switch (type) {
    case 'ArrowBack':
      Icon = ArrowBack;
      break;
    case 'NavigateNext':
      Icon = NavigateNext;
      break;
    case 'Close':
      Icon = Close;
      break;
    case 'Search':
      Icon = Search;
      break;
    case 'Favorite':
      Icon = Favorite;
      break;
    case 'FavoriteBorder':
      Icon = FavoriteBorder;
      break;
  }
  return <Icon style={{ color, height, width }} />;
};
