import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'
import { useGetNewsQuery } from '../services/createNewsApi'
import { useGetSpecificTeamQuery } from '../services/createSportsApi'
import './News.css'

function News() {
  let search = 'nfl'
  const { data, isLoading } = useGetNewsQuery({ search })
  console.log(data)

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
