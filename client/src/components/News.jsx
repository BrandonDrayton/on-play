import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useGetCurrentUserQuery } from '../services/createUserApi'
import { useGetNewsQuery } from '../services/createNewsApi'
import { useGetSpecificTeamQuery, useGetTeamQuery } from '../services/createSportsApi'
import './News.css'

function News() {
  const { data: user, isLoading } = useGetCurrentUserQuery()
  let search = user.FavoriteTeamId ? `${user.Team.league} ${user.Team.name}` : 'sports news'
  const { data } = useGetNewsQuery({ search })
  const [searchTeam, setSearchTeam] = useState('')
  const { data: team } = useGetTeamQuery({
    sport: user.Team?.sport,
    league: user.Team?.league,
    id: user.Team?.espnTeamId,
  })

  const news = data?.items
  const teamLogo = team?.team.logos[1]

  return (
    <>
      <Flex justifyContent="center">
        <div className="outer-div">
          <Flex>
            <div className="sidebar">
              {news?.slice(96, 100).map((team) => (
                <div className="sidebar-section">
                  <div className="section-body">
                    {/* <img src={'/images/logo.png'} alt="" /> */}
                    <img className="img-wrap" src={teamLogo?.href || '/images/logo.png'} alt="" />
                  </div>
                  <div className="section-footer">
                    <div className="footer-information">
                      <div className="discipline">{team.title.slice(0, 50) + '...'}</div>
                      <a className="articleButton btn btn-1" href={team.link} target="_blank" rel="noreferrer">
                        Full article
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Flex>
        </div>
      </Flex>
    </>
  )
}

export default News
