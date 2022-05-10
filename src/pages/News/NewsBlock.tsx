/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import moment from 'moment';
import { Zoom } from '@material-ui/core';
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
  EditTextField,
} from './styled';
import EditNewsBoxContainer from '../../components/EditNewsBox/EditNewsBoxContainer';

interface INews {
  newsList: Array<{
    [key: string]: string;
  }>;
  loading?: boolean;
  refetch?: () => void;
  backgroundColor?: string;
}

function NewsBlock({ newsList, refetch, loading }: INews): JSX.Element {
  const [isChange, setChange] = useState<string>('');

  const handleApplyCourse = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    setChange((event.target as HTMLElement).id);
  };

  const openChanger = (): void => {
    setChange('');
  };

  return (
    <>
      <NewsBlockGrid key="NewsBlockGrid" container>
        {newsList &&
          newsList.map((news) => (
            <NewsItemBlock key={news.id} item xl={3} lg={3} md={4} sm={12}>
              <InfoNewsBlock>
                <TitileText>{news.title}</TitileText>
                <DescriptionText>{news.content}</DescriptionText>
              </InfoNewsBlock>
              <DateNewsBlock>
                <TimeText>{moment(news.created_at).format('lll')}</TimeText>
              </DateNewsBlock>

              {isChange === news.id ? (
                <ChangeInputShow>
                  <EditNewsBoxContainer
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
                      onClick={(e) => handleApplyCourse(e)}
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
    </>
  );
}

export default React.memo(NewsBlock);
