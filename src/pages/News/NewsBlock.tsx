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
import { TextField } from '../../components/TextField';

interface INews extends INewsTypes {
  newsList: Array<{
    [key: string]: string;
  }>;
  loading?: boolean;
  refetch?: () => void;
  backgroundColor?: string;
}

export default function NewsBlock({
  warningHandler,
  formikNews,
  newsList,
  refetch,
}: INews): JSX.Element {
  const {
    values: { title, content },
    handleSubmit,
    handleBlur,
    errors,
    touched,
  } = formikNews;
  const [isChange, setChange] = useState<string>('');

  const handleApplyCourse = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    setChange((event.target as HTMLElement).id);
  };

  return (
    <>
      <NewsBlockGrid key="NewsBlockGrid" container>
        {newsList &&
          newsList.map((news) => (
            <NewsItemBlock key={news.id} item xl={3} md={6} xs={12}>
              <InfoNewsBlock>
                <TitileText>{news.title}</TitileText>
                <DescriptionText>{news.content}</DescriptionText>
              </InfoNewsBlock>
              <DateNewsBlock>
                <TimeText>{moment(news.created_at).format('lll')}</TimeText>
              </DateNewsBlock>

              {isChange === news.id ? (
                <ChangeInputShow>
                  <Box component="form" onSubmit={handleSubmit}>
                    <EditTextField
                      defaultValue={news.title}
                      warningHandler={warningHandler}
                      id="title"
                    />
                    <EditTextField
                      defaultValue={news.content}
                      warningHandler={warningHandler}
                      id="content"
                    />
                    <ButtonBox>
                      <ButtonShow type="submit" color="secondary" id={news.id} variant="contained">
                        Edit
                      </ButtonShow>
                      <ButtonShow color="primary" id={news.id} variant="contained">
                        Delete
                      </ButtonShow>
                      <ButtonShow
                        color="warning"
                        id={news.id}
                        onClick={() => setChange('')}
                        variant="outlined"
                      >
                        Hide
                      </ButtonShow>
                    </ButtonBox>
                  </Box>
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
