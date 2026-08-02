/* =====================================================================
   2026 HOT SEAT — SHARED DATA  (edit THIS file only for weekly updates)
   =====================================================================
   Both pages read from this file:
     • index.html (the board)        • 2026-hot-seat-notes.html (the notes)

   HOW TO UPDATE EACH WEEK
   -----------------------
   1. Change `meta.week` and `meta.updated` below.
   2. Change any coach's `prob` number. The board re-sorts, re-ranks,
      recolors the heat bar, and moves the "cooler seats" divider
      automatically — you do NOT touch ranks or order anywhere.
   3. Commit this one file. GitHub Pages redeploys in ~1 minute and both
      pages reflect the change.

   HOW TO EDIT THE NOTES TEXT (the write-ups)
   ------------------------------------------
   Each coach's `notes` is a list of paragraphs. Each string = one
   paragraph. Add a paragraph by adding a string; delete one by removing
   it. You may use <em>italic</em> and <b>bold</b> inside a paragraph.
   Write & as &amp;  (e.g. "Texas A&amp;M").

   HOW TO EDIT A STAT CHIP
   -----------------------
   Each coach's `stats` is a list of [ "LABEL", "value" ] pairs. Add,
   remove, or reword any pair freely. Keep values short (they're chips).

   FIELDS
   ------
   coach, team, prob (number), cbs (string; use "FY" for first-year hires).
   id / stats / notes are only needed for coaches you want a notes page for.
   ANY coach given an `id` + `notes` block automatically gets an underlined,
   linked name on the board and a full entry on the notes page — regardless
   of probability. Coaches without `notes` show as plain text and get no entry.
   ===================================================================== */

window.HOTSEAT = {
  meta: {
    week: "Preseason",
    updated: "August 2, 2026"
  },

  conferences: [

  /* ================= BIG TEN ================= */
  { name: "Big Ten", teams: 18, note: "2 in real danger", coaches: [
    { id:"fickell", coach:"Luke Fickell", team:"Wisconsin", prob:58, cbs:"5.0",
      stats:[ ["Record","16–21 at WIS"], ["Buyout","$25M → $19.2M"], ["Schedule","Misses OSU·UM·UO·IU"], ["The line","Reach a bowl or out"] ],
      notes:[
        "The hottest seat in the league and one of three coaches nationally to draw a unanimous 5.0 from CBS. Fickell is 16–21 in Madison for a program that didn't post a losing season from 2002 through 2023, and last year featured consecutive shutouts for the first time since 1977. He \"barely hung on\" this past offseason.",
        "The buyout — which steps down from roughly $25M to about $19.2M once he's coached the full season — is real protection, but its bite is softened by a payout structure spread over several years rather than a crippling lump sum, which makes pulling the trigger more palatable than the headline number suggests. The decisive factor is the schedule: Wisconsin opens against Notre Dame at Lambeau (a likely loss that won't be held against him), then gets two very winnable non-conference games, and critically <em>misses Indiana, Oregon, Ohio State and Michigan</em> in Big Ten play — about as forgiving a draw as exists in the 18-team league. It gives Fickell a genuine path to bowl eligibility while removing every excuse if he can't find it. A third straight 4–8-ish season against this slate ends the tenure."
      ] },
    { id:"locksley", coach:"Mike Locksley", team:"Maryland", prob:50, cbs:"4.9",
      stats:[ ["Record","4–8, 4–8"], ["Buyout","$13.4M (½ in 60d)"], ["AD","New — Jim Smith, no stake"], ["The line","Win B1G games it should"] ],
      notes:[
        "Essentially as hot as Fickell (4.9) but with a slightly different risk profile. Locksley is coming off back-to-back 4–8 seasons, has been close to winless in Big Ten play across that stretch, and admitted last year he lost the locker room. The accelerant is a <em>new athletic director</em> (Jim Smith) with no ownership of the hire and an explicit mandate to return to winning.",
        "The dampener is the checkbook: his buyout is about $13.4M, with roughly half due within 60 days — a genuinely painful upfront number for a program that isn't cash-flush, which is the main reason this sits at a coin flip rather than higher. The schedule sets up a mirage: Maryland is heavily favored in its openers (FAU, Northern Illinois, Towson), so a 3–0 or 4–0 start is likely and will quiet the noise temporarily. The verdict comes entirely in Big Ten play, where sophomore QB Malik Washington is the swing variable. If the DMV-recruited roster still loses conference games it should win, the goodwill from three prior bowls won't save him."
      ] },
    { id:"riley", coach:"Lincoln Riley", team:"USC", prob:10, cbs:"3.8",
      stats:[ ["Context","Yr 5 · pressure building"], ["Buyout","Among sport's largest"], ["Investment","No. 1 recruiting class"], ["The line","Real risk is 2027"] ],
      notes:[
        "The rating (3.8) says warm; the balance sheet says almost untouchable for one more year. Riley's buyout is among the very largest in the sport, which makes an in-season or postseason firing a near-impossibility barring total collapse. USC has also signaled all-in commitment: the No. 1 recruiting class in the country, returning QB Jayden Maiava, and a splashy hire of Gary Patterson as defensive coordinator.",
        "The pressure is unmistakably building — a difficult midseason stretch could define his future <em>beyond</em> 2026 — but the money and the fresh investment make an actual 2026 dismissal unlikely. The real risk year is 2027 if this doesn't work."
      ] },
    { id:"rhule", coach:"Matt Rhule", team:"Nebraska", prob:6, cbs:"3.0",
      stats:[ ["Record","First bowl since '18"], ["Buyout","Large (8-yr deal)"], ["The line","Only a collapse moves it"] ],
      notes:[
        "Anxiety is rising (3.0) and the fanbase wants more, but Nebraska made its first bowl in seven years, the program finally looks stable, and Rhule's eight-year contract carries a buyout large enough that only a scandal or a shocking collapse moves him."
      ] },
    { id:"schiano", coach:"Greg Schiano", team:"Rutgers", prob:5, cbs:"2.8",
      stats:[ ["Record","Bowl team"], ["Buyout","Modest; values continuity"], ["The line","A losing year warms it"] ],
      notes:[
        "A 2.8 reflects real but manageable pressure. Rutgers made a bowl, isn't eager to eat a buyout, and generally values continuity. A losing regression would warm this considerably, but the baseline is safe."
      ] },
    { coach:"David Braun", team:"Northwestern", prob:4, cbs:"2.5" },
    { coach:"Barry Odom", team:"Purdue", prob:3, cbs:"1.8" },
    { coach:"P.J. Fleck", team:"Minnesota", prob:3, cbs:"2.1" },
    { coach:"Jedd Fisch", team:"Washington", prob:2, cbs:"1.7" },
    { coach:"Bret Bielema", team:"Illinois", prob:2, cbs:"" },
    { coach:"Kirk Ferentz", team:"Iowa", prob:1, cbs:"" },
    { coach:"Ryan Day", team:"Ohio State", prob:1, cbs:"" },
    { coach:"Dan Lanning", team:"Oregon", prob:1, cbs:"" },
    { coach:"Curt Cignetti", team:"Indiana", prob:0.5, cbs:"" },
    { coach:"Kyle Whittingham", team:"Michigan", prob:0.5, cbs:"FY" },
    { coach:"Pat Fitzgerald", team:"Michigan State", prob:0.5, cbs:"FY" },
    { coach:"Matt Campbell", team:"Penn State", prob:0.5, cbs:"FY" },
    { coach:"Bob Chesney", team:"UCLA", prob:0.5, cbs:"FY" }
  ]},

  /* ================= SEC ================= */
  { name: "SEC", teams: 16, note: "2 in real danger", coaches: [
    { id:"beamer", coach:"Shane Beamer", team:"South Carolina", prob:35, cbs:"4.3",
      stats:[ ["Record","4–8 (1–7 SEC)"], ["Buyout","$25–28M ($39M w/ staff)"], ["AD","Donati extended him '25"], ["The line","Bowl or bust"] ],
      notes:[
        "The hottest seat in the league and the third-hottest in the country per CBS (4.3), trailing only the three unanimous 5.0s and Maryland's Locksley. Beamer is coming off a 4–8 (1–7 SEC) collapse — the worst season of his tenure — one year after a nine-win breakthrough that had South Carolina in the preseason playoff conversation. The Gamecocks lost their final five SEC games, including a blown 27-point halftime lead at Texas A&amp;M, and Beamer made his first in-season staff firings. He has publicly embraced the pressure, acknowledging he's essentially coaching for his job.",
        "Two things keep this well below a coin flip. First, the buyout is a genuine barrier: a without-cause dismissal runs roughly $25–28M (over $39M once assistants are included), structured to be paid out rather than dropped as a lump sum. Second — the key differentiator from the Locksley case — athletic director Jeremiah Donati is technically a <em>new</em> AD who inherited Beamer, but he <em>chose to extend him</em> in January 2025, adding three years and nearly $19M in buyout. That's ownership of the hire, not indifference to it. The schedule is demanding but not the usual gauntlet: two non-conference gimmes (Kent State, Towson) plus winnable SEC games (Mississippi State and Kentucky at home, Arkansas away), against a tougher run of Alabama, Florida, Tennessee, Oklahoma, Texas A&amp;M and Georgia. Bowl eligibility is the line that saves him; a second straight bowl-less year almost certainly ends it."
      ] },
    { id:"lebby", coach:"Jeff Lebby", team:"Mississippi State", prob:28, cbs:"3.0",
      stats:[ ["Record","7–18 (1–15 SEC)"], ["Buyout","$11–12M (from $14.3M)"], ["AD","Selmon won't wait"], ["The line","3rd-yr make-or-break"] ],
      notes:[
        "The classic third-year make-or-break, and the only other SEC seat that's truly warm (3.0). Lebby is 7–18 overall and just 1–15 in SEC play across two seasons, though he squeaked into a bowl in 2025 (a loss) after a 2–10 debut, and notched his first conference win over Arkansas in November.",
        "The accelerants are real: AD Zach Selmon has signaled he won't wait on a flat trajectory, Mississippi State has a recent history of eating buyouts to move on quickly (Moorhead after two years), and the 2026 schedule is brutal — Alabama, Oklahoma, Missouri and Vanderbilt all appear on a slate that could plausibly produce another two- or three-win SEC season. The dampeners: the buyout is still meaningful (roughly $11–12M after 2026, down from about $14.26M), Mississippi State is arguably the hardest job in the league so patience is sometimes extended by necessity, and the 2025 bowl trip bought a sliver of goodwill. This sits just behind Beamer because the CBS anchor is lower and the \"who could realistically do better here\" question is a genuine brake — but a slow start against this schedule could tip it past a firing before Halloween."
      ] },
    { id:"deboer", coach:"Kalen DeBoer", team:"Alabama", prob:3, cbs:"3.0",
      stats:[ ["Record","Yr 2 CFP run"], ["Buyout","~$67.5M (3rd-largest)"], ["AD","Extended, not warned"], ["The line","Expectations, not risk"] ],
      notes:[
        "The CBS number (3.0) says warm; the balance sheet and the calendar say almost untouchable for 2026. This is expectations heat, not firing risk. DeBoer went 9–4 in year one and returned to the Playoff in year two before a humiliating 38–3 Rose Bowl loss to Indiana — and Alabama's response was to <em>extend</em> him, not threaten him. His buyout sits in the high-$60Ms (around $67.5M), the third-largest in the sport, paid at 90% of the remaining deal. National analysts have been blunt that a near-term firing is \"unlikely\" and that Alabama \"really can't afford\" it barring scandal or a fall-off-a-cliff collapse. The pressure is unmistakable and 2027 could look different if the results stall, but an actual 2026 dismissal is close to a non-event."
      ] },
    { id:"sarkisian", coach:"Steve Sarkisian", team:"Texas", prob:2, cbs:"2.6",
      stats:[ ["Record","Back-to-back semifinals"], ["Roster","Arch Manning, all-in"], ["Buyout","Large; fresh commitment"], ["The line","Win it all, not keep job"] ],
      notes:[
        "Same shape as DeBoer, one notch cooler (2.6). Texas is all-in — Arch Manning under center, a loaded roster, top-of-the-sport investment — which raises the expectation bar to playoff-or-bust and simultaneously makes a 2026 firing nearly impossible given the buyout and the fresh commitment. Sarkisian restored the program to national relevance with back-to-back semifinal appearances; the heat is about whether he can win it all, not whether he keeps the job. The real referendum year, if there is one, is 2027."
      ] },
    { coach:"Josh Heupel", team:"Tennessee", prob:2, cbs:"2.3" },
    { coach:"Clark Lea", team:"Vanderbilt", prob:2, cbs:"1.8" },
    { coach:"Eli Drinkwitz", team:"Missouri", prob:1, cbs:"1.1" },
    { coach:"Brent Venables", team:"Oklahoma", prob:1, cbs:"1.9" },
    { coach:"Mike Elko", team:"Texas A&amp;M", prob:0.5, cbs:"1.7" },
    { coach:"Kirby Smart", team:"Georgia", prob:0.5, cbs:"0.1" },
    { coach:"Lane Kiffin", team:"LSU", prob:0.5, cbs:"FY" },
    { coach:"Jon Sumrall", team:"Florida", prob:0.5, cbs:"FY" },
    { coach:"Alex Golesh", team:"Auburn", prob:0.5, cbs:"FY" },
    { coach:"Will Stein", team:"Kentucky", prob:0.5, cbs:"FY" },
    { coach:"Ryan Silverfield", team:"Arkansas", prob:0.5, cbs:"FY" },
    { coach:"Pete Golding", team:"Ole Miss", prob:0.5, cbs:"FY" }
  ]},

  /* ================= ACC ================= */
  { name: "ACC", teams: 17, note: "4 in real danger", coaches: [
    { id:"norvell", coach:"Mike Norvell", team:"Florida State", prob:48, cbs:"5.0",
      stats:[ ["Record","7–17 since '23"], ["Buyout","~$50M+ (largest)"], ["AD","Donors soured"], ["The line","Buyout is the only brake"] ],
      notes:[
        "The hottest seat in the league and one of three coaches nationally to draw a unanimous 5.0 from CBS. The football case for a change is overwhelming: FSU is 7–17 since the 13–0 dream run in 2023, including a 2–10 collapse in 2024 and a 5–7 finish in 2025 that opened with an upset of Alabama and then fell apart. Donors have soured, and reporting through last November had the seat \"legit fire hot.\"",
        "What holds this <em>below</em> a coin flip — and below where a 5.0 would normally land it — is the single largest financial barrier in the model: a buyout among the very biggest in the sport (in the neighborhood of $50M-plus), owed by an athletic department already under real financial strain. Florida State can't realistically absorb that number in-season, which is the only reason a coach this embattled isn't rated higher. Get off to another poor start, though, and once the buyout math becomes survivable he is the likeliest marquee firing in the country."
      ] },
    { id:"belichick", coach:"Bill Belichick", team:"North Carolina", prob:30, cbs:"4.1",
      stats:[ ["Record","Yr 2 · rocky debut"], ["Buyout","Guaranteed years"], ["AD","New AD vs. chancellor"], ["The line","Legend-firing = humiliation"] ],
      notes:[
        "A 4.1 (\"start improving now\") is extraordinary for a coach entering just his second year — a measure of how much the sport's most decorated NFL figure was expected to deliver immediately, and how underwhelming and chaotic the debut looked. The layers are unusual: a new athletic director (Newmark) with no stake in the hire is the classic accelerant, and the off-field drama swirling around the program only sharpened the scrutiny.",
        "Against the door: the person who <em>did</em> hire him, Chancellor Lee Roberts, remains in place and has publicly preached patience, and firing a six-time Super Bowl winner after two seasons would be a national humiliation the university invested enormous prestige to avoid. The guaranteed years plus the chancellor's backing keep this meaningfully below the 4.1 rating's usual implication — but the dysfunction keeps it from being low."
      ] },
    { id:"doeren", coach:"Dave Doeren", team:"NC State", prob:28, cbs:"3.0",
      stats:[ ["Record","95–70 · Yr 14"], ["Buyout","$10–12M (very low)"], ["Market","Seen as top-3 vacancy"], ["The line","Cheap to fire"] ],
      notes:[
        "The rating (3.0) understates the risk, and the reason is the buyout: at roughly <em>$10–12M, it's one of the lowest walk-away numbers of any long-tenured Power Four coach.</em> Doeren is entering year 14 as the second-longest-tenured coach in the league, sits at 95–70, and has never reached an ACC Championship Game. 2025 was a modest step forward from 6–7 in 2024, but the roster was gutted by the transfer portal and the industry expectation is regression.",
        "The accelerant beyond the cheap buyout: in a 2026 cycle without the usual glut of blue-blood openings (LSU, Florida, Penn State all filled last year), NC State is viewed as potentially a top-three job on the market — meaning a resourceful replacement is gettable, and a slow start would turn the temperature up fast. Low cost to fire plus an attractive vacancy is exactly the profile that produces a midseason move."
      ] },
    { id:"obrien", coach:"Bill O'Brien", team:"Boston College", prob:22, cbs:"3.5",
      stats:[ ["Record","2–10 (1–7 ACC)"], ["Buyout","~$25M (private school)"], ["AD","James retained him"], ["The line","One more year, on notice"] ],
      notes:[
        "The highest raw rating in this tier at 3.5, and on results alone the seat is scorching: a 2–10 (1–7 ACC) collapse in 2025 after 7–6 in 2024, with several lopsided losses, leaving him 9–16 overall.",
        "What tempers the number is timing — AD Blake James already made his call, publicly retaining O'Brien for 2026 with a direct endorsement (\"the right man to be our head coach\") and a commitment to compete harder in revenue sharing. That fresh vote of confidence, plus a buyout in the ~$25M range that is real money for a private school like BC, dampens the in-season trigger. But the endorsement is conditional on progress; another 2–10 with an AD who has already spent his credibility defending the hire flips this quickly. Call it a coach who has been given one more year, on notice."
      ] },
    { id:"narduzzi", coach:"Pat Narduzzi", team:"Pittsburgh", prob:5, cbs:"2.1",
      stats:[ ["Context","Entering Yr 12"], ["QB","Freshman Mason Heintschel"], ["The line","Only a sophomore slump"] ],
      notes:[
        "Would be warmer entering year 12 if not for the emergence of true freshman quarterback Mason Heintschel, whose play brought energy back to the program. As long as he develops, Narduzzi is fine; a sophomore-slump regression is the only realistic path to trouble."
      ] },
    { id:"swinney", coach:"Dabo Swinney", team:"Clemson", prob:4, cbs:"3.1",
      stats:[ ["Record","7–6 (worst since '08)"], ["Buyout","$57M fortress, no offset"], ["AD","Neff endorsed him"], ["The line","Unfireable this cycle"] ],
      notes:[
        "Pure expectations heat, and the direct analog to Alabama's DeBoer. The 3.1 rating reflects a fan base's frustration after a 7–6 season (his worst full-year finish since 2008) and a program that's slipped from its perch — not any real chance of a firing. The buyout is a $57M fortress in 2026, paid in installments with no offset, on top of the cost of a replacement; AD Graham Neff endorsed him after the season, and multiple national insiders describe Swinney as having \"lifetime job security.\" He is essentially unfireable this cycle regardless of the rating."
      ] },
    { coach:"Fran Brown", team:"Syracuse", prob:3, cbs:"2.0" },
    { coach:"Tony Elliott", team:"Virginia", prob:2, cbs:"1.1" },
    { coach:"Mario Cristobal", team:"Miami", prob:1, cbs:"0.5" },
    { coach:"Manny Diaz", team:"Duke", prob:1, cbs:"1.0" },
    { coach:"Jeff Brohm", team:"Louisville", prob:1, cbs:"0.8" },
    { coach:"Rhett Lashlee", team:"SMU", prob:1, cbs:"0.9" },
    { coach:"Jake Dickert", team:"Wake Forest", prob:1, cbs:"1.1" },
    { coach:"Brent Key", team:"Georgia Tech", prob:0.5, cbs:"0.1" },
    { coach:"James Franklin", team:"Virginia Tech", prob:0.5, cbs:"FY" },
    { coach:"Tosh Lupoi", team:"California", prob:0.5, cbs:"FY" },
    { coach:"Tavita Pritchard", team:"Stanford", prob:0.5, cbs:"FY" }
  ]},

  /* ================= BIG 12 ================= */
  { name: "Big 12", teams: 16, note: "2 in real danger", coaches: [
    { id:"aranda", coach:"Dave Aranda", team:"Baylor", prob:55, cbs:"5.0",
      stats:[ ["Record","24–30 Big 12"], ["Buyout","~$12M (payable)"], ["AD","McNamee backs, conditional"], ["The line","Win ~8 or gone"] ],
      notes:[
        "The hottest seat in the league and one of only three coaches nationally to draw a unanimous 5.0 from CBS (alongside Norvell and Fickell). The football case is straightforward: Aranda is 36–37 overall and just 24–30 in Big 12 play across six seasons, with the 12–2 Big 12 title run in 2021 now a distant outlier, and last year's 5–7 finish included one-score losses to Houston, TCU and Arizona State that fed the \"can't close\" narrative.",
        "What separates Aranda from the other 5.0s in the country is that <em>nothing structural is holding the door shut.</em> His buyout is roughly $12M — real money, but eminently payable for a Big 12 program in the revenue-share era, and a fraction of the $30–58M fortresses protecting coaches like Norvell and Sanders. He was retained last November largely by default: former AD Mack Rhoades left amid scandal, the AD search dragged, and President Linda Livingstone brought Aranda back citing stability, roster retention and continued investment. New AD Doug McNamee has voiced public support — but that support is explicitly conditional, and the industry consensus is blunt: <em>win roughly eight games or be gone.</em> Aranda answered by gambling the season on former five-star DJ Lagway (a ~$3M portal QB with a 28-to-23 career TD-to-INT ratio at Florida), handing defensive play-calling to new coordinator Joe Klanderman, and rebuilding the offensive line. The schedule offers a genuine path — two near-automatic non-conference wins (Prairie View A&amp;M, Louisiana Tech) plus a winnable Auburn opener in Atlanta, and a Big 12 draw that misses both Utah and Arizona — but the closing kick of at BYU, Texas Tech and at Houston is where seasons like this usually unravel. This lands above a coin flip precisely because the buyout won't save him if the results don't come."
      ] },
    { id:"satterfield", coach:"Scott Satterfield", team:"Cincinnati", prob:30, cbs:"3.5",
      stats:[ ["Record","7–6, 0–5 finish"], ["Buyout","~$5.5M (from $11.7M)"], ["AD","John Cunningham"], ["The line","Another Nov. fade ends it"] ],
      notes:[
        "The second-hottest seat in the league at 3.5, and a case defined by a maddening trajectory. Satterfield has technically improved every year — 3–9, then 5–7, then 7–6 with a bowl in 2025 — but the how matters more than the record. Last fall the Bearcats ripped off a 7–1 start, climbed into the rankings and looked like a dark-horse Big 12 contender, then collapsed with an 0–5 finish capped by a Liberty Bowl loss to Navy. He has now lost six straight November games, and a program still measuring itself against Luke Fickell's 53–10 golden era has limited patience for late-season swoons.",
        "The number that keeps this from climbing higher is the buyout: fired after the 2026 season, Satterfield would be owed roughly $5.5M (down from about $11.7M a year ago, as the deal steps down) — a very manageable figure for a Big 12 athletic department under AD John Cunningham. So the money is not a barrier; the question is purely whether the on-field product justifies a change. Returning quarterback Brendan Sorsby is a real asset and the arrow on paper points up, which is why this sits below Aranda. But another autumn fade — no November win, a slide out of bowl position — would likely end it, and the recent history says that scenario is live."
      ] },
    { id:"sanders", coach:"Deion Sanders", team:"Colorado", prob:4, cbs:"3.1",
      stats:[ ["Record","3–9 in '25"], ["Buyout","$33.6M, cost-prohibitive"], ["AD","George backed; departing '26"], ["The line","Brand makes it near-zero"] ],
      notes:[
        "The most-discussed name on this list and, in firing terms, one of the least likely. Sanders' 3.1 rating is a genuine jump from the 0.33 he carried a year ago, and it is earned: after the 9–4 Travis Hunter/Shedeur Sanders season in 2024, Colorado cratered to 3–9 in 2025 once both stars left for the NFL, season-ticket renewals fell from a near-universal ~98% to 78.4%, and the \"not even entertaining anymore\" critiques mounted.",
        "But the firing math barely moves, for two reasons that dwarf the on-field picture. First, the buyout is a fortress: Colorado would owe Sanders roughly <em>$33.6M</em> to fire him before the end of 2026 (stepping down to about $25.5M in 2027), a figure reporting has repeatedly called cost-prohibitive. Second, the brand is close to irreplaceable — Sanders single-handedly dragged Colorado from a 1–11 afterthought into national relevance, and no athletic department willingly returns to irrelevance to eat a $33.6M check. The one real wildcard is that AD Rick George, Sanders' most vocal backer (\"the seat is not hot\"), is departing in spring 2026, which means a new AD inherits the situation — but no incoming AD fires Deion Sanders over performance in year one at that price. The likelier path to a Colorado change isn't a firing at all: Sanders has battled serious health issues, including bladder-removal surgery for cancer and a history of blood clots, and a <em>voluntary</em> step-away for health would be a different event than the performance-based dismissal this model measures."
      ] },
    { id:"leipold", coach:"Lance Leipold", team:"Kansas", prob:3, cbs:"2.3",
      stats:[ ["Record","Rebuild plateaued"], ["Buyout","Invested: facilities, stadium"], ["The line","Pressure, not firing risk"] ],
      notes:[
        "A respected program-builder whose rebuild has plateaued statistically, but Kansas has invested in him (new facilities, a temporary home stadium) and has no appetite to reset. Pressure exists; firing risk doesn't."
      ] },
    { coach:"Sonny Dykes", team:"TCU", prob:2, cbs:"2.1" },
    { coach:"Brent Brennan", team:"Arizona", prob:2, cbs:"1.8" },
    { coach:"Joey McGuire", team:"Texas Tech", prob:1, cbs:"1.4" },
    { coach:"Scott Frost", team:"UCF", prob:1, cbs:"1.6" },
    { coach:"Rich Rodriguez", team:"West Virginia", prob:1, cbs:"1.5" },
    { coach:"Kenny Dillingham", team:"Arizona State", prob:0.5, cbs:"0.9" },
    { coach:"Willie Fritz", team:"Houston", prob:0.5, cbs:"0.7" },
    { coach:"Kalani Sitake", team:"BYU", prob:0.5, cbs:"0.3" },
    { coach:"Eric Morris", team:"Oklahoma State", prob:0.5, cbs:"FY" },
    { coach:"Jimmy Rogers", team:"Iowa State", prob:0.5, cbs:"FY" },
    { coach:"Collin Klein", team:"Kansas State", prob:0.5, cbs:"FY" },
    { coach:"Morgan Scalley", team:"Utah", prob:0.5, cbs:"FY" }
  ]}

  ]
};
