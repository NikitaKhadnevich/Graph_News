import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { LOADER } from 'constants/loaderTypes';
import cutNewsContent from 'utils/helpers/cutNewsContent';
import EditNewsBoxContainer from 'components/EditNewsBox/EditNewsBoxContainer';
import { INewsMain } from '../../types/news';
import {
  NewsBlockGrid,
  NewsItemBlock,
  InfoNewsBlock,
  TitileText,
  DescriptionText,
  TimeText,
  DateNewsBlock,
  ChangeInputShow,
  ChangeInputHide,
  ButtonShow,
  ButtonBox,
} from './styled';
import Loader from '../../components/Loader';

function NewsBlock({ newsList, refetch, loading }: INewsMain): JSX.Element {
  const [isChange, setChange] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const openEditArea = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    setChange((event.target as HTMLElement).id);
  };

  const openChanger = (): void => {
    setChange('');
  };

  const isFetchingAction = (loader: boolean): void => {
    setLoading(loader);
  };

  useEffect(() => {
    openChanger();
    setLoading(false);
  }, [newsList]);

  return (
    <>
      {isLoading ? (
        <Loader color="primary" type={LOADER.content} />
      ) : (
        <NewsBlockGrid key="NewsBlockGrid" container>
          {newsList &&
            newsList.map((news) => (
              <NewsItemBlock key={news.id} item xl={3} lg={4} md={6} sm={12}>
                <InfoNewsBlock>
                  <TitileText>{news.title}</TitileText>
                  <DescriptionText>{cutNewsContent(news.content, 150)}...</DescriptionText>
                </InfoNewsBlock>
                <DateNewsBlock>
                  <TimeText>Added {moment(news.created_at).format('llll')}</TimeText>
                  <TimeText>Updated {moment(news.updated_at).format('lll')}</TimeText>
                </DateNewsBlock>
                {isChange === news.id ? (
                  <ChangeInputShow>
                    <EditNewsBoxContainer
                      isFetchingAction={isFetchingAction}
                      loading={loading}
                      refetch={refetch}
                      news={news}
                      openChanger={openChanger}
                    />
                  </ChangeInputShow>
                ) : (
                  <ChangeInputHide>
                    <ButtonBox>
                      <ButtonShow
                        color="warning"
                        id={news.id}
                        onClick={openEditArea}
                        variant="outlined"
                      >
                        Edit
                      </ButtonShow>
                    </ButtonBox>
                  </ChangeInputHide>
                )}
              </NewsItemBlock>
            ))}
        </NewsBlockGrid>
      )}
    </>
  );
}

export default React.memo(NewsBlock);
