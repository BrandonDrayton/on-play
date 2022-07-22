import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useGetCurrentUserQuery } from '../services/createUserApi'
import { useGetNewsQuery } from '../services/createNewsApi'
import { useGetSpecificTeamQuery } from '../services/createSportsApi'
import './News.css'

function News() {
  const { data: user, isLoading } = useGetCurrentUserQuery()
  let search = user.FavoriteTeamId ? `${user.Team.league} ${user.Team.name}` : 'sports news'
  const { data } = useGetNewsQuery({ search })
  const [searchTeam, setSearchTeam] = useState('')
  // if (!favoriteTeam) {
  //   return null
  // }
  // console.log(favoriteTeam)

  const news = data?.items
  console.log(news)

  return (
    <>
      <div className="sidebar">
        {news?.slice(96, 100).map((team) => (
          <div className="sidebar-section">
            <div className="section-body">
              <img
                className="img-wrap"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.trbimg.com%2Fimg-599d1641%2Fturbine%2Fos-sp-2017-college-football-rankings-alabama-0820&f=1&nofb=1"
                alt=""
              />
            </div>
            <div className="section-footer">
              <div className="footer-information">
                <div className="discipline">
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            Section 1 title
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>{team.title}</AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
                <a className="articleButton btn btn-1" href={team.link}>
                  Full article
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default News
