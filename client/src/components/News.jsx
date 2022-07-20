import React from 'react'
import { useGetNewsQuery } from '../services/createNewsApi'

function News() {
  let search = 'nfl'
  const { data, isLoading } = useGetNewsQuery({ search })
  console.log(data)

  const news = data?.search
  return (
    <div className="sidebar">
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
            <div className="discipline">Football</div>
            <div className="warn">Next match in:</div>
            <div className="timer">03:01</div>
            <button className="watch">Watch now!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
