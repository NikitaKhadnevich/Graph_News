/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Zoom } from '@material-ui/core';
import { LOADER } from 'constants/loaderTypes';
import { INewsTypes } from '../../types/news';
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
import EditNewsBoxContainer from '../../components/EditNewsBox/EditNewsBoxContainer';
import Loader from '../../components/Loader';

interface INews {
  newsList: Array<{
    [key: string]: string;
  }>;
  loading?: boolean;
  refetch: () => void;
  backgroundColor?: string;
}

function NewsBlock({ newsList, refetch, loading }: INews): JSX.Element {
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
              <NewsItemBlock key={news.id} item xl={3} lg={3} md={4} sm={12}>
                <InfoNewsBlock>
                  <TitileText>{news.title}</TitileText>
                  <DescriptionText>{news.content}</DescriptionText>
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
