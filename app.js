const countdown = () => {
    const countDate = new Date("Jan 9, 2022 05:00:00").getTime()
    const now = new Date().getTime()
    const distance = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(distance / day)
    const textHour = Math.floor((distance % day) / hour)
    const textMinutes = Math.floor((distance % hour) / minute)
    const textSeconds = Math.floor((distance % minute) / second)

    document.querySelector(".day").innerText = textDay
    document.querySelector(".hour").innerText = textHour
    document.querySelector(".minute").innerText = textMinutes
    document.querySelector(".second").innerText = textSeconds
    
}
setInterval(countdown, 1000)






  