import MainView from 'views/Main.js'
import React from 'react'

const getDeals = async () => {
  var location = navigator.geolocation.getCurrentPosition(function (location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    console.log(location.coords.accuracy);
  return data.deals
  });
  const res = await fetch('/deals.json')
  const data = await res.json()
  return data.deals
}

const sendLike = async item => {
  const res = await fetch(`/like/${item.id}`, {
    method: 'POST'
  })

  console.log(res)
  return res.ok
}

export default class Main extends React.Component {
  state = {
    deals: [],
  }

  async componentDidMount() {
    this.setState({
      deals: await getDeals(),
    })
  }

  remove = item => {
    this.setState({
      deals: this.state.deals.filter(deal => deal !== item)
    })
  }

  like = async item => {
    this.setState({
      deals: this.state.deals.map(deal => {
        if (deal === item) {
          return {
            ...deal,
            liked: !deal.liked,
          }
        } else {
          return deal
        }
      })
    })


    const ok = await sendLike(item)
    if (!ok) {
      this.setState(prevState => ({
        deals: prevState.deals.map(deal => {
          if (deal === item) {
            return {
              ...deal,
              liked: false,
            }
          } else {
            return deal
          }
        })
      }))
    }
  }

  render() {
    const { props, state } = this
    return <MainView {...props} deals={state.deals} like={this.like} remove={this.remove} />
  }
}
