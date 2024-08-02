import React from 'react'
import styles from './SingleGame.module.scss'
import { Box, Container, Grid } from '@mui/material'
import fakedata from "fakedata";
import { t } from 'i18next'
import SIngleCardGame from 'Components/UI/SingleCardGame/SIngleCardGame';

const SingleGame = () => {
  const data = fakedata();

  return (
   <div className={styles.singleGame}>
     <Container>
    <Box sx={{ flexGrow: 1 }}>
      <h1 className="title">{t("PUBG Mobile UC")}</h1>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.root1.map((item, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <SIngleCardGame
              key={item.id}
              id={item.id}
              count={item.count}
              price={item.price}
              img={item.img}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
   </div>
  )
}

export default SingleGame