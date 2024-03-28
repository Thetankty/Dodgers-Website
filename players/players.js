const playerData = [
    {
        name: "Ryan Brasier",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/518489/headshot/silo/current",
        stats: "B/T: R/R Ht: 6' 0\" Wt: 223 DOB: 08/26/1987"
    },
    {
        name: "J.P. Feyereisen",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/656420/headshot/silo/current",
        stats: "B/T: R/R Ht: 6' 2\" Wt: 215 DOB: 02/07/1993"
    },
    {
        name: "Tyler Glasnow",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/607192/headshot/silo/current",
        stats: "B/T: L/R Ht: 6' 8\" Wt: 225 DOB: 08/23/1993"
    },
    {
        name: "Michael Grove",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/675627/headshot/silo/current",
        stats: "B/T: R/R Ht: 6' 3\" Wt: 200 DOB: 12/18/1996"
    },
    {
        name: "Daniel Hudson",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/543339/headshot/silo/current",
        stats: "B/T: R/R Ht: 6' 3\" Wt: 215 DOB: 03/09/1987"
    },
    {
        name: "Kyle Hurt",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/669165/headshot/silo/current",
        stats: "B/T: R/R Ht: 6' 3\" Wt: 240 DOB: 05/30/1998"
    },
    {
        name: "Joe Kelly",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/523260/headshot/silo/current",
        stats: "B/T: R/R Ht: 6' 1\" Wt: 174 DOB: 06/09/1988"
    },
    {
        name: "Landon Knack",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/689017/headshot/silo/current",
        stats: "B/T: L/R Ht: 6' 2\" Wt: 220 DOB: 07/15/1997"
    },
    {
        name: "Bobby Miller",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/676272/headshot/silo/current",
        stats: "B/T: L/R Ht: 6' 5\" Wt: 220 DOB: 04/05/1999"
    },
    {
        name: "James Paxton",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/572020/headshot/silo/current",
        stats: "B/T: L/L Ht: 6' 4\" Wt: 212 DOB: 11/06/1988"
    },
    {
        name: "Evan Phillips",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/623465/headshot/silo/current",
        stats: "B/T: R/R Ht: 6' 2\" Wt: 215 DOB: 09/11/1994"
    },
    {
        name: "Gavin Stone",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/694813/headshot/silo/current",
        stats: "B/T: R/R Ht: 6' 1\" Wt: 175 DOB: 10/15/1998"
    },
    {
        name: "Gus Varland",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/681402/headshot/silo/current",
        stats: "B/T: L/R Ht: 6' 1\" Wt: 213 DOB: 11/06/1996"
    },
    {
        name: "Alex Vesia",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/681911/headshot/silo/current",
        stats: "B/T: L/L Ht: 6' 1\" Wt: 209 DOB: 04/11/1996"
    },
    {
        name: "Yoshinobu Yamamoto",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/808967/headshot/silo/current",
        stats: "B/T: R/R Ht: 5' 10\" Wt: 176 DOB: 08/17/1998"
    },
    {
        name: "Ryan Yarbrough",
        position: "Pitcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/642232/headshot/silo/current",
        stats: "B/T: R/L Ht: 6' 5\" Wt: 215 DOB: 12/31/1991"
    },
    {
        name: "Shohei Ohtani",
        position: "Two-Way Player",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/660271/headshot/silo/current",
        stats: "B/T: L/R Ht: 6' 4\" Wt: 210 DOB: 07/05/1994"
    },
    {
        name: "Austin Barnes",
        position: "Catcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/605131/headshot/silo/current",
        stats: "B/T: R/R Ht: 5' 10\" Wt: 187 DOB: 12/28/1989"
    },
    {
        name: "Will Smith",
        position: "Catcher",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/669257/headshot/silo/current",
        stats: "B/T: R/R Ht: 5' 10\" Wt: 195 DOB: 03/28/1995"
    },
    {
        name: "Freddie Freeman",
        position: "Infielder",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/518692/headshot/silo/current",
        stats: "B/T: L/R Ht: 6' 5\" Wt: 220 DOB: 09/12/1989"
    },
    {
        name: "Enrique Hernández",
        position: "Infielder",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/571771/headshot/silo/current",
        stats: "B/T: R/R Ht: 5' 11\" Wt: 195 DOB: 08/24/1991"
    },
    {
        name: "Gavin Lux",
        position: "Infielder",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/666158/headshot/silo/current",
        stats: "B/T: L/R Ht: 6' 2\" Wt: 190 DOB: 11/23/1997"
    },
    {
        name: "Max Muncy",
        position: "Infielder",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/571970/headshot/silo/current",
        stats: "B/T: L/R Ht: 6' 0\" Wt: 215 DOB: 08/25/1990"
    },
    {
        name: "Miguel Rojas",
        position: "Infielder",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/500743/headshot/silo/current",
        stats: "B/T: R/R Ht: 6' 0\" Wt: 188 DOB: 02/24/1989"
    },
    {
        name: "Chris Taylor",
        position: "Infielder",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/621035/headshot/silo/current",
        stats: "B/T: R/R Ht: 6' 1\" Wt: 196 DOB: 08/29/1990"
    },
    {
        name: "Mookie Betts",
        position: "Outfielder",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/605141/headshot/silo/current",
        stats: "B/T: R/R Ht: 5' 9\" Wt: 180 DOB: 10/07/1992"
    },
    {
        name: "Teoscar Hernández",
        position: "Outfielder",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/606192/headshot/silo/current",
        stats: "B/T: R/R Ht: 6' 2\" Wt: 215 DOB: 10/15/1992"
    },
    {
        name: "Jason Heyward",
        position: "Outfielder",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/518792/headshot/silo/current",
        stats: "B/T: L/L Ht: 6' 5\" Wt: 240 DOB: 08/09/1989"
    },
    {
        name: "James Outman",
        position: "Outfielder",
        image: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/681546/headshot/silo/current",
        stats: "B/T: L/R Ht: 6' 3\" Wt: 215 DOB: 05/14/1997"
    }
];
const cardsContainer = document.querySelector('.player-cards');

playerData.forEach(player => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `
        <img src="${player.image}" alt="${player.name}">
        <div class="player-name">${player.name} </div>
        <div class="player-position">${player.position}</div>
        <div class="player-stats">${player.stats}</div>
    `;
    cardsContainer.appendChild(card);
});