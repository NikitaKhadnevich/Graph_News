/* eslint-disable no-nested-ternary */
/* eslint-disable react/react-in-jsx-scope */
import { LOADER } from 'constants/loaderTypes';
import Loader from 'components/Loader';
import { NewsWrapper } from './styled';
import { INewsMain } from '../../types/news';
import NewsBlock from './NewsBlock';

const News = ({ newsList, loading, refetch }: INewsMain): JSX.Element => (
  <NewsWrapper>
    {loading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : newsList ? (
      <NewsBlock newsList={newsList} refetch={refetch} loading={loading} />
    ) : null}
  </NewsWrapper>
);
export default News;
