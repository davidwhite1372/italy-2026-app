    // ===================== DATA =====================
    const TRIP = {
      travelers: "David & Melody",
      start: "2026-10-04",
      end: "2026-10-15",
      cities: ["Rome", "Florence", "Venice"],
      hotels: [
        { city: "Rome", name: "Anantara Palazzo Naiadi", dates: "Oct 5–8", conf: "Event-provided", address: "Piazza della Repubblica 48-49" },
        { city: "Florence", name: "W Florence", dates: "Oct 8–10", conf: "Event-provided", address: "Via del Melarancio 1" },
        { city: "Venice", name: "JW Marriott Venice Resort & Spa", dates: "Oct 10–13", conf: "Event-provided", address: "Isola delle Rose" },
        { city: "Venice", name: "Hotel Antiche Figure", dates: "Oct 13–15", conf: "PO55JT57ZW", address: "Santa Croce 686, Fondamenta San Simeon Piccolo" }
      ],
      air: "H9BVBD / AZ3BUA",
      confRomeFlo: "NCN4K9C4SJD",
      confVen: "WGNRXC5J54C",
      italo: "EM7VNB",
      fx: 1.1367
    };

    const DAYS = [
      { date: "2026-10-04", theme: "Departure Day", city: "Tampa → Boston → Copenhagen", hotel: "Overnight in flight",
        schedule: "6:45 AM leave Spring Hill; park at TPA; check bags to FCO; DL2706 to Boston; transfer to Terminal E; SK928 overnight to Copenhagen.",
        transport: "Personal vehicle, SkyConnect, Delta DL2706, terminal transfer, SAS SK928.",
        dining: "Eat before the overnight flight; hydrate and sleep after the main meal.",
        tip: "Photograph the parking location and baggage tags. Keep passports, medication and power bank in the carry-on.",
        phrase: "Dov'è il gate? — Where is the gate?",
        checklist: ["Passports","Wallet","Phones","Boarding passes","Medication","Power bank"] },
      { date: "2026-10-05", theme: "Arrival in Rome", city: "Rome", hotel: "Anantara Palazzo Naiadi",
        schedule: "CPH passport control and SK681 to Rome; collect bags; Leonardo Express to Termini; walk/taxi to hotel; registration; 8:00 PM welcome dinner at SEEN by Olivier.",
        transport: "SAS SK681, Leonardo Express, then walk or taxi to Piazza della Repubblica.",
        dining: "Light lunch after arrival; welcome dinner at the hotel at 8:00 PM.",
        tip: "Avoid a long nap. Hydrate, shower and stay awake until the evening program.",
        phrase: "Vorrei un taxi, per favore. — I would like a taxi, please.",
        checklist: ["Bags collected","Train tickets","Hotel check-in","Registration","Dinner attire"] },
      { date: "2026-10-06", theme: "Rome Program Day", city: "Rome", hotel: "Anantara Palazzo Naiadi",
        schedule: "Private Joe Lynch agenda is still pending. Official fallback options include winery or Castel Gandolfo.",
        transport: "Group coach if provided; otherwise confirm the meeting point at the hotel.",
        dining: "Follow the hosted schedule; do not make a conflicting nonrefundable reservation.",
        tip: "Check the hospitality desk and messages before breakfast for final instructions.",
        phrase: "A che ora partiamo? — What time do we leave?",
        checklist: ["Confirm agenda","Meeting point","Comfortable shoes","Water","Phone charged"] },
      { date: "2026-10-07", theme: "Rome & Awards Dinner", city: "Rome", hotel: "Anantara Palazzo Naiadi",
        schedule: "Private group activities during the day; awards dinner at Villa Miani in the evening.",
        transport: "Use the group coach if provided; Villa Miani is typically 20–35 minutes from the hotel depending on traffic.",
        dining: "Hosted awards dinner; confirm dress code and coach departure time.",
        tip: "Set out dinner clothes early and be in the lobby 15 minutes before departure.",
        phrase: "Qual è il codice di abbigliamento? — What is the dress code?",
        checklist: ["Dress clothes","Coach time","Event credentials","Phone","Room key"] },
      { date: "2026-10-08", theme: "Rome to Florence", city: "Florence", hotel: "W Florence",
        schedule: "Pack and check out; follow PSA instructions to the Rome station; group train to Florence; check in at W Florence; networking event at Giardino Corsini al Prato.",
        transport: "Group transfer, train, then short walk or taxi to W Florence.",
        dining: "Networking event in the evening; confirm whether food is included.",
        tip: "Do not assume Roma Termini until PSA confirms the station, train and meeting point.",
        phrase: "Da quale binario parte il treno? — Which platform does the train leave from?",
        checklist: ["Check out","Luggage tags","Train details","Hotel address","Event attire"] },
      { date: "2026-10-09", theme: "Florence Program Day", city: "Florence", hotel: "W Florence",
        schedule: "Florence private group activities. Official excursions and dinner remain fallback options until the final agenda arrives.",
        transport: "Walk or group coach depending on the activity.",
        dining: "Follow hosted plans; leave dinner flexible until the agenda is confirmed.",
        tip: "Keep museum bookings refundable until the private schedule is final.",
        phrase: "Possiamo andare a piedi? — Can we walk there?",
        checklist: ["Confirm agenda","Comfortable shoes","Water","Portable charger","Dinner plan"] },
      { date: "2026-10-10", theme: "Florence to Venice", city: "Venice", hotel: "JW Marriott Venice",
        schedule: "Check out and travel to Firenze S.M.N.; Italo 8904 departs 9:39 AM and arrives Venezia S.L. at 11:55 AM; follow the confirmed transfer to JW Marriott; gondola rides and welcome reception 4:00-6:00 PM.",
        transport: "Walk/taxi to Firenze S.M.N., Italo 8904, then PSA/JW hotel transfer.",
        dining: "Light lunch provided during transit. Free evening for dinner after the reception.",
        tip: "Italo 8904 Club Executive is the confirmed primary plan. Cancel only if the final PSA group transfer becomes clearly preferable.",
        phrase: "Dov'è il punto d'incontro? — Where is the meeting point?",
        checklist: ["Check out","Meeting point","Luggage","Reception attire","Dinner shortlist"] },
      { date: "2026-10-11", theme: "Venice Excursion Day", city: "Venice", hotel: "JW Venice",
        schedule: "Breakfast at leisure; choose Ciao Venice OR The Venetian Islands: Murano & Burano; return time depends on the selected excursion.",
        transport: "Hosted excursion using boat/walking transport; use JW shuttle as instructed.",
        dining: "Free evening for dinner. Avoid a fixed reservation until excursion return time is known.",
        tip: "Make the excursion selection and verify departure/return times the night before.",
        phrase: "Quanto dura l'escursione? — How long is the excursion?",
        checklist: ["Excursion choice","Departure time","Weather layer","Water","Dinner plan"] },
      { date: "2026-10-12", theme: "Discover Venice", city: "Venice", hotel: "JW Venice",
        schedule: "Breakfast at leisure; visit the PSA Hospitality Desk and plan a flexible Discover Venice day.",
        transport: "JW shuttle, walking and vaporetto as appropriate.",
        dining: "Free evening for dinner; use the Restaurants tab for local choices.",
        tip: "Ask the hospitality desk about hotel shuttle cutoffs before heading into central Venice.",
        phrase: "A che ora è l'ultima navetta? — What time is the last shuttle?",
        checklist: ["Hospitality desk","Shuttle schedule","Vaporetto plan","Dinner idea","Power bank"] },
      { date: "2026-10-13", theme: "Personal Venice Day", city: "Venice", hotel: "Hotel Antiche Figure",
        schedule: "Check out of JW Marriott and transfer to Hotel Antiche Figure. Check-in is after 2:00 PM; personal Venice evening afterward.",
        transport: "JW Marriott shuttle boat to Giardini Reali, Vaporetto Line 2 to Piazzale Roma terminal G or F, then walk along the Grand Canal to the hotel.",
        dining: "Choose from the Venice restaurant shortlist; reserve only after confirming the return shuttle.",
        tip: "From Piazzale Roma, do not cross Ponte della Costituzione/Calatrava Bridge. Turn right along the Grand Canal, cross two small bridges, then continue about 50 metres.",
        phrase: "Un tavolo per due, per favore. — A table for two, please.",
        checklist: ["Day plan","Shuttle times","Restaurant","Water","Comfortable shoes"] },
      { date: "2026-10-14", theme: "Final Full Day", city: "Venice", hotel: "Hotel Antiche Figure",
        schedule: "Final personal day; confirm airport bus or water-taxi plan, complete flight check-in, pack and stage documents.",
        transport: "Walk and vaporetto; airport route from nearby Piazzale Roma.",
        dining: "Final Venice dinner. Keep the evening relaxed and return early enough to finish packing.",
        tip: "Set two alarms and place passports, boarding passes and transfer details together before bed.",
        phrase: "Può chiamare un taxi acqueo? — Can you call a water taxi?",
        checklist: ["Flight check-in","Airport transfer","Pack","Two alarms","Passports staged"] },
      { date: "2026-10-15", theme: "Return Home", city: "Venice → Copenhagen → New York → Tampa", hotel: "Travel day",
        schedule: "Leave Hotel Antiche Figure around 6:30 AM; walk to Piazzale Roma and take ATVO/ACTV airport bus, or use a pre-booked water taxi; continue VCE-CPH-JFK-TPA.",
        transport: "Walk + airport bus or water taxi, SAS SK2692, SAS SK915, JFK AirTrain, Delta-operated SK3438, SkyConnect.",
        dining: "Eat when practical during connections; do not stop at JFK until bags are rechecked and you are through T4 security.",
        tip: "The CPH and JFK connections are time-sensitive. Move directly between checkpoints and confirm bags are tagged to TPA.",
        phrase: "Dove devo ritirare i bagagli? — Where do I collect the luggage?",
        checklist: ["Passports","Boarding passes","Bags tagged TPA","Customs forms","Parking photo"] }
    ];

    const TIMELINE = [
      { id:"tl-0001", travelId:"travel-1", date:"2026-10-04", start:"06:45", end:"07:00", itemType:"Car / Drive", title:"Drive to TPA Economy Parking", from:"Spring Hill, FL", to:"TPA Economy Parking", mode:"Drive", time:"75-105 min", status:"Confirmed", instructions:"Drive via FL-589 / Veterans Expressway. Photograph parking location.", notes:"Leave extra time for traffic and parking." },
      { id:"tl-0002", travelId:"travel-2", date:"2026-10-04", start:"08:00", end:"08:15", itemType:"Train", title:"Take SkyConnect to the Main Terminal", from:"TPA Economy Parking", to:"TPA Main Terminal", mode:"Train", time:"10-20 min", status:"Confirmed", instructions:"Elevator to Level 1, then SkyConnect to Main Terminal.", notes:"Keep luggage together." },
      { id:"tl-0003", travelId:"travel-3", date:"2026-10-04", start:"08:40", end:"09:05", itemType:"Information", title:"TPA Main Terminal → Delta check-in / bag drop", from:"TPA Main Terminal", to:"Delta check-in / bag drop", mode:"Walk", time:"15-25 min", status:"Confirmed", instructions:"Check bags through to FCO. Photograph baggage tags.", notes:"Verify final destination reads FCO." },
      { id:"tl-0004", travelId:"travel-4", date:"2026-10-04", start:"09:05", end:"09:35", itemType:"Information", title:"Delta check-in → TPA departure gate", from:"Delta check-in", to:"TPA departure gate", mode:"Walk", time:"20-30 min", status:"Confirmed", instructions:"Clear TSA and proceed to gate.", notes:"Boarding pass and passports accessible." },
      { id:"tl-0005", date:"2026-10-04", start:"11:39", end:"14:55", itemType:"Flight", flightId:"flight-dl2706", title:"TPA Airport → BOS - Boston Logan Airport Terminal A", from:"TPA Airport", to:"BOS - Boston Logan Airport Terminal A", mode:"Flight DL2706", time:"3h 16m", status:"Confirmed", instructions:"Economy.", notes:"" },
      { id:"tl-0006", travelId:"travel-6", date:"2026-10-04", start:"14:55", end:"16:55", itemType:"Walk", title:"Walk from Boston Terminal A to Terminal E / SAS gate", from:"BOS - Boston Logan Airport Terminal A", to:"BOS - Boston Logan Airport Terminal E / SAS gate", mode:"Walk", time:"45-90 min", status:"Verify Day-Of", instructions:"Confirm SK928 gate; follow the signed terminal route; re-clear TSA if required.", notes:"Gate target about 4:55 PM." },
      { id:"tl-0007", date:"2026-10-04", start:"17:40", end:"07:00+1", itemType:"Flight", flightId:"flight-sk928", title:"BOS - Boston Logan Airport Terminal E → CPH - Copenhagen Airport", from:"BOS - Boston Logan Airport Terminal E", to:"CPH - Copenhagen Airport", mode:"Flight SK928", time:"7h 20m", status:"Confirmed", instructions:"Premium Economy; set devices to Rome time, hydrate, sleep after meal.", notes:"Arrival is Oct 5." },
      { id:"tl-0008", travelId:"travel-8", date:"2026-10-05", start:"07:00", end:"08:15", itemType:"Walk", title:"CPH - Copenhagen Airport arrival gate → CPH - Copenhagen Airport Rome departure gate", from:"CPH - Copenhagen Airport arrival gate", to:"CPH - Copenhagen Airport Rome departure gate", mode:"Airport connection / passport control", time:"60-75 min", status:"Confirmed", instructions:"Follow Transfer signs; enter Schengen; proceed to SK681 gate.", notes:"Tight 90-minute connection." },
      { id:"tl-0009", date:"2026-10-05", start:"08:30", end:"11:05", itemType:"Flight", flightId:"flight-sk681", title:"CPH - Copenhagen Airport → FCO - Rome Fiumicino Airport Terminal 1", from:"CPH - Copenhagen Airport", to:"FCO - Rome Fiumicino Airport Terminal 1", mode:"Flight SK681", time:"2h 35m", status:"Confirmed", instructions:"Premium Economy.", notes:"" },
      { id:"tl-0010", travelId:"travel-10", date:"2026-10-05", start:"11:05", end:"12:15", itemType:"Information", title:"FCO - Rome Fiumicino Airport aircraft → FCO Airport baggage claim / train station", from:"FCO - Rome Fiumicino Airport aircraft", to:"FCO Airport baggage claim / train station", mode:"Walk", time:"45-70 min", status:"Confirmed", instructions:"Collect both bags, follow train icons to railway station.", notes:"No passport control expected after Schengen entry at CPH." },
      { id:"tl-0011", travelId:"travel-11", date:"2026-10-05", start:"12:15", end:"13:00", itemType:"Train", title:"Fiumicino Aeroporto Train Station → Roma Termini Train Station", from:"Fiumicino Aeroporto Train Station", to:"Roma Termini Train Station", mode:"Leonardo Express", time:"32 min + wait", status:"Confirmed", instructions:"Buy tickets from official Trenitalia. Nonstop to Termini.", notes:"Do not take FL1." },
      { id:"tl-0012", travelId:"travel-12", date:"2026-10-05", start:"13:00", end:"13:20", itemType:"Walk", title:"Roma Termini Train Station → Anantara Palazzo Naiadi Hotel", from:"Roma Termini Train Station", to:"Anantara Palazzo Naiadi Hotel", mode:"Walk", time:"10-15 min", status:"Confirmed", instructions:"Exit toward Piazza dei Cinquecento / Via Luigi Einaudi to Piazza della Repubblica.", notes:"Hotel: Piazza della Repubblica 48-49." },
      { id:"tl-0013", travelId:"travel-13", date:"2026-10-05", start:"13:20", end:"17:00", itemType:"Event", title:"Check in, register, and settle into the hotel", from:"Hotel", to:"Tea Room / room", mode:"Event", time:"Flexible", status:"Confirmed", instructions:"Check in or store luggage; event registration; hydrate, shower, light meal.", notes:"Avoid long nap." },
      { id:"tl-0014", travelId:"travel-14", date:"2026-10-05", start:"20:00", end:"22:30", itemType:"Walk", title:"Hotel → SEEN by Olivier", from:"Hotel", to:"SEEN by Olivier", mode:"Walk", time:"On-site", status:"Confirmed", instructions:"Attend welcome dinner.", notes:"Confirm exact venue on agenda." },
      { id:"tl-0015", travelId:"travel-15", date:"2026-10-06", start:"All day", end:"", itemType:"Bus", title:"Hotel → Rome / official excursion", from:"Hotel", to:"Rome / official excursion", mode:"Group Coach", time:"TBD", status:"Pending", instructions:"Joe Lynch private agenda TBD. Fallback: winery or Castel Gandolfo.", notes:"Do not book conflicting nonrefundable tour." },
      { id:"tl-0016", travelId:"travel-16", date:"2026-10-07", start:"All day", end:"", itemType:"Bus", title:"Hotel → Rome / Villa Miani", from:"Hotel", to:"Rome / Villa Miani", mode:"Group Coach", time:"20-35 min to venue", status:"Partial", instructions:"Private group day; awards dinner at Villa Miani. Use group coach if provided.", notes:"Confirm dress code and coach time." },
      { id:"tl-0017", travelId:"travel-17", date:"2026-10-08", start:"Morning", end:"", itemType:"Walk", title:"Anantara Palazzo Naiadi Hotel → Roma Termini Train Station", from:"Anantara Palazzo Naiadi Hotel", to:"Roma Termini Train Station", mode:"Walk", time:"TBD", status:"Pending", instructions:"Walk with the PSA/Joe Lynch group to Roma Termini Train Station. Final train details are still TBD.", notes:"Station route is current; final train number, departure time, coach, and seats are pending." },
      { id:"tl-0018", travelId:"travel-18", date:"2026-10-08", start:"Morning", end:"", itemType:"Train", title:"Rome to Florence Train - PSA group transfer", from:"Roma Termini Train Station", to:"Firenze S.M.N. Train Station", mode:"Train", time:"Approx. 5 hr group travel window", status:"Pending", instructions:"Follow the PSA/Joe Lynch group. The station-to-station plan is current; the final train is being booked by the group.", notes:"Need final train number, exact departure/arrival times, coach, and seats." },
      { id:"tl-0019", travelId:"travel-19", date:"2026-10-08", start:"Day", end:"", itemType:"Walk", title:"Firenze S.M.N. Train Station → W Florence Hotel", from:"Firenze S.M.N. Train Station", to:"W Florence Hotel", mode:"Walk", time:"5-10 min", status:"Pending", instructions:"Stay with group. If S.M.N., walk to Via del Melarancio 1.", notes:"Exact station depends on group train." },
      { id:"tl-0020", travelId:"travel-20", date:"2026-10-08", start:"Evening", end:"", itemType:"Walk", title:"W Florence → Giardino Corsini al Prato", from:"W Florence", to:"Giardino Corsini al Prato", mode:"Walk", time:"15-20 min walk", status:"Pending", instructions:"Networking event. Use event transport if provided.", notes:"Need dress code and transport plan." },
      { id:"tl-0021", travelId:"travel-21", date:"2026-10-09", start:"All day", end:"", itemType:"Walk", title:"W Florence → Florence activities", from:"W Florence", to:"Florence activities", mode:"Walk", time:"TBD", status:"Pending", instructions:"Official excursions and dinner are fallback items.", notes:"Do not lock museum tickets until private agenda is final." },
      { id:"tl-0022", travelId:"travel-22", date:"2026-10-10", start:"08:15", end:"08:30", itemType:"Walk", title:"W Florence Hotel → Firenze S.M.N. Train Station", from:"W Florence Hotel", to:"Firenze S.M.N. Train Station", mode:"Walk", time:"5-10 min + buffer", status:"Confirmed", instructions:"Check out, retrieve luggage, walk to station. Allow extra time for Club Executive boarding.", notes:"Ticket EM7VNB; train departs 9:39 AM." },
      { id:"tl-0023", travelId:"travel-23", date:"2026-10-10", start:"09:39", end:"11:55", itemType:"Train", title:"Firenze S.M.N. Train Station → Venezia Santa Lucia Train Station", from:"Firenze S.M.N. Train Station", to:"Venezia Santa Lucia Train Station", mode:"Train - Italo 8904 Club Executive", time:"2h 16m", status:"Confirmed", instructions:"Board Coach 1; David seat 13, Melody seat 16. Keep valuables at seats.", notes:"Primary plan: keep the excellent first-class seats. May cancel only if the PSA group transfer becomes the better final option." },
      { id:"tl-0024", travelId:"travel-24", date:"2026-10-10", start:"12:00", end:"13:30", itemType:"Boat / Ferry", title:"Venezia Santa Lucia Train Station → JW Marriott Venice Resort & Spa Hotel", from:"Venezia Santa Lucia Train Station", to:"JW Marriott Venice Resort & Spa Hotel", mode:"PSA/JW Group Water Transfer", time:"TBD", status:"Pending", instructions:"PSA will move the group from Venezia Santa Lucia Train Station to the JW Marriott island hotel. Follow the group meeting point and water-transfer instructions.", notes:"Train arrives 11:55 AM; hotel program begins 1:30 PM. Exact boat and meeting point remain pending." },
      { id:"tl-0025", travelId:"travel-25", date:"2026-10-10", start:"16:00", end:"18:00", itemType:"Tour", title:"Gondola experience and welcome reception", from:"JW Venice", to:"Gondola / reception", mode:"Tour", time:"2 hr", status:"Confirmed", instructions:"Evening gondola rides and welcome reception.", notes:"Follow PSA meeting instructions from hospitality desk." },
      { id:"tl-0026", travelId:"travel-26", date:"2026-10-10", start:"Evening", end:"", itemType:"Walk", title:"JW Venice → Dinner of choice", from:"JW Venice", to:"Dinner of choice", mode:"Walk", time:"Flexible", status:"Confirmed", instructions:"Free evening for dinner.", notes:"Use Restaurants tab." },
      { id:"tl-0027", travelId:"travel-27", date:"2026-10-11", start:"Morning", end:"", itemType:"Information", title:"JW Venice → JW Venice", from:"JW Venice", to:"JW Venice", mode:"Breakfast / excursion preparation", time:"Flexible", status:"Confirmed", instructions:"Breakfast at leisure.", notes:"Check breakfast hours the night before." },
      { id:"tl-0028", travelId:"travel-28", date:"2026-10-11", start:"Day", end:"", itemType:"Tour", title:"Venice excursion", from:"JW Venice", to:"Venice excursion", mode:"Tour", time:"Most of day", status:"Decision Needed", instructions:"Choose Ciao Venice OR The Venetian Islands: Murano & Burano.", notes:"Details on Venice Excursions page." },
      { id:"tl-0029", travelId:"travel-29", date:"2026-10-11", start:"Evening", end:"", itemType:"Walk", title:"Excursion / JW → Dinner of choice", from:"Excursion / JW", to:"Dinner of choice", mode:"Walk", time:"Flexible", status:"Confirmed", instructions:"Free evening.", notes:"Avoid booking until return time known." },
      { id:"tl-0030", travelId:"travel-30", date:"2026-10-12", start:"Day", end:"", itemType:"Boat / Ferry", title:"JW Marriott Venice Resort & Spa Hotel → Venice", from:"JW Marriott Venice Resort & Spa Hotel", to:"Venice", mode:"JW Marriott Shuttle / Vaporetto", time:"Flexible", status:"Confirmed", instructions:"Discover Venice. Visit the PSA Hospitality Desk before leaving the hotel.", notes:"Use Today and City Cards for options." },
      { id:"tl-0045", travelId:"travel-45", date:"2026-10-12", start:"Evening", end:"", itemType:"Boat / Ferry", title:"Venice / JW Marriott Venice Resort & Spa Hotel → Dinner location of choice", from:"Venice / JW Marriott Venice Resort & Spa Hotel", to:"Dinner location of choice", mode:"JW Marriott Shuttle / Vaporetto", time:"Flexible", status:"Confirmed", instructions:"Free evening for dinner. Use the Food page to choose a nearby restaurant.", notes:"Confirm the final JW Marriott shuttle boat return time before staying in central Venice." },
      { id:"tl-0031", travelId:"travel-31", date:"2026-10-13", start:"10:00", end:"", itemType:"Boat / Ferry", title:"JW Marriott Venice Resort & Spa Hotel → Giardini Reali JW Marriott Shuttle Stop", from:"JW Marriott Venice Resort & Spa Hotel", to:"Giardini Reali JW Marriott Shuttle Stop", mode:"JW Marriott Hotel Shuttle Boat", time:"TBD", status:"Confirmed", instructions:"Check out and take the JW Marriott shuttle boat to the Giardini Reali shuttle stop in central Venice.", notes:"First leg of the multi-step transfer to Hotel Antiche Figure." },
      { id:"tl-0032", travelId:"travel-32", date:"2026-10-13", start:"11:00", end:"", itemType:"Boat / Ferry", title:"Giardini Reali Vaporetto Stop → Piazzale Roma Vaporetto Terminal G or F", from:"Giardini Reali Vaporetto Stop", to:"Piazzale Roma Vaporetto Terminal G or F", mode:"Vaporetto Line 2", time:"TBD", status:"Confirmed", instructions:"Take Vaporetto Line 2 from Giardini Reali toward Piazzale Roma and exit at terminal G or F.", notes:"Second leg of the multi-step hotel transfer." },
      { id:"tl-0041", travelId:"travel-41", date:"2026-10-13", start:"11:30", end:"", itemType:"Walk", title:"Piazzale Roma Vaporetto Terminal G or F → Hotel Antiche Figure", from:"Piazzale Roma Vaporetto Terminal G or F", to:"Hotel Antiche Figure", mode:"Walk", time:"10-15 min", status:"Confirmed", instructions:"Do not cross Ponte della Costituzione / Calatrava Bridge. Turn right along the Grand Canal, cross two small bridges, then continue straight about 50 metres to the hotel.", notes:"Use the southern walking route from Piazzale Roma. Hotel confirmation PO55JT57ZW." },
      { id:"tl-0042", travelId:"travel-42", date:"2026-10-13", start:"14:00", end:"", itemType:"Event", title:"Hotel Antiche Figure lobby → Hotel Antiche Figure room", from:"Hotel Antiche Figure lobby", to:"Hotel Antiche Figure room", mode:"Event", time:"Flexible", status:"Confirmed", instructions:"Superior Double Room. Breakfast, Wi-Fi, city map, and gluten-free breakfast included.", notes:"Address: Santa Croce 686. Check-in after 2:00 PM." },
      { id:"tl-0046", travelId:"travel-46", date:"2026-10-13", start:"Evening", end:"", itemType:"Walk", title:"Hotel Antiche Figure → Venice personal evening", from:"Hotel Antiche Figure", to:"Venice personal evening", mode:"Walk", time:"Flexible", status:"Pending", instructions:"David and Melody personal evening. Use the hotel location near Piazzale Roma and Venezia Santa Lucia Train Station as the base.", notes:"Use the Food page for dinner ideas and confirm the return route." },
      { id:"tl-0047", travelId:"travel-47", date:"2026-10-14", start:"Morning", end:"", itemType:"Information", title:"Hotel Antiche Figure → Trip preparation", from:"Hotel Antiche Figure", to:"Trip preparation", mode:"Trip Preparation", time:"Flexible", status:"Pending", instructions:"Confirm Venice Marco Polo Airport transportation, complete airline check-in, and begin packing.", notes:"Set two alarms and stage passports, boarding passes, and transfer details." },
      { id:"tl-0033", travelId:"travel-33", date:"2026-10-14", start:"Day", end:"", itemType:"Walk", title:"Hotel Antiche Figure → Venice personal itinerary", from:"Hotel Antiche Figure", to:"Venice personal itinerary", mode:"Walk", time:"Flexible", status:"Pending", instructions:"Final personal Venice day. Cluster activities by neighborhood to minimize bridge crossings.", notes:"Keep the day flexible and monitor the weather." },
      { id:"tl-0048", travelId:"travel-48", date:"2026-10-14", start:"Evening", end:"", itemType:"Walk", title:"Venice → Hotel Antiche Figure", from:"Venice", to:"Hotel Antiche Figure", mode:"Walk", time:"Flexible", status:"Pending", instructions:"Enjoy the final dinner, return to the hotel early enough to finish packing, and reconfirm the first airport bus or water-taxi backup.", notes:"Purchase or stage ATVO/ACTV bus tickets before bed." },
      { id:"tl-0034", travelId:"travel-34", date:"2026-10-15", start:"06:30", end:"07:00", itemType:"Walk", title:"Walk to ATVO Station and buy airport-bus tickets", from:"Hotel Antiche Figure", to:"ATVO Ticket Office / Station", mode:"Walk", time:"Approx. 20-30 min", status:"Plan Confirmed / Timetable Pending", instructions:"Walk from Hotel Antiche Figure to the ATVO ticket office/station at Piazzale Roma and purchase or confirm the airport bus ticket.", notes:"Use the verified ATVO office/station location and final walking instructions." },
      { id:"tl-0050", travelId:"travel-50", date:"2026-10-15", start:"07:00", end:"08:00", itemType:"Bus", title:"Take the ATVO airport bus to VCE Departures", from:"ATVO Station, Piazzale Roma", to:"VCE - Venice Marco Polo Airport Departures", mode:"ATVO Airport Bus", time:"Approx. 20-30 min + wait", status:"Plan Confirmed / Timetable Pending", instructions:"Board the first suitable ATVO Blue Express airport bus to Venice Marco Polo Airport Departures.", notes:"Verify first-morning timetable and target airport arrival around 8:00 AM." },
      { id:"tl-0049", travelId:"travel-49", date:"2026-10-15", start:"08:00", end:"10:15", itemType:"Information", title:"VCE - Venice Marco Polo Airport entrance → VCE - Venice Marco Polo Airport SAS departure gate", from:"VCE - Venice Marco Polo Airport entrance", to:"VCE - Venice Marco Polo Airport SAS departure gate", mode:"Airport Check-in / Security", time:"2+ hr buffer", status:"Confirmed", instructions:"Complete SAS bag drop, verify both checked bags are tagged to TPA - Tampa International Airport, clear airport security, and proceed to the departure gate.", notes:"Ask where checked bags must be reclaimed and rechecked at JFK Airport." },
      { id:"tl-0035", date:"2026-10-15", start:"11:00", end:"13:05", itemType:"Flight", flightId:"flight-sk2692", title:"VCE - Venice Marco Polo Airport → CPH - Copenhagen Airport", from:"VCE - Venice Marco Polo Airport", to:"CPH - Copenhagen Airport", mode:"Flight SK2692", time:"2h 5m", status:"Confirmed", instructions:"Confirm bags tagged to TPA.", notes:"Connection 1h 15m." },
      { id:"tl-0043", travelId:"travel-43", date:"2026-10-15", start:"13:05", end:"14:20", itemType:"Information", title:"CPH - Copenhagen Airport Schengen arrival gate → CPH - Copenhagen Airport U.S. departure gate", from:"CPH - Copenhagen Airport Schengen arrival gate", to:"CPH - Copenhagen Airport U.S. departure gate", mode:"Airport Connection / Exit Passport Control", time:"75-min connection", status:"Verify Day-Of", instructions:"Follow transfer signs to the non-Schengen/U.S. departure area, complete exit passport control and document checks, and proceed directly to the SK915 gate.", notes:"Shortest connection of the return itinerary; do not stop for food." },
      { id:"tl-0036", date:"2026-10-15", start:"14:20", end:"17:00", itemType:"Flight", flightId:"flight-sk915", title:"CPH - Copenhagen Airport → JFK - New York John F. Kennedy Airport Terminal 1", from:"CPH - Copenhagen Airport", to:"JFK - New York John F. Kennedy Airport Terminal 1", mode:"Flight SK915", time:"8h 40m", status:"Confirmed", instructions:"Premium Economy.", notes:"Most time-sensitive connection at CPH (exit passport control)." },
      { id:"tl-0037", travelId:"travel-37", date:"2026-10-15", start:"17:00", end:"19:00", itemType:"Walk", title:"JFK Airport Terminal 1 → JFK Airport Terminal 4 / Delta gate", from:"JFK Airport Terminal 1", to:"JFK Airport Terminal 4 / Delta gate", mode:"Walk", time:"90-120 min", status:"Confirmed", instructions:"Immigration, reclaim bags, customs, recheck, AirTrain to T4, TSA, gate.", notes:"Do not stop until through T4 security." },
      { id:"tl-0038", date:"2026-10-15", start:"19:50", end:"23:13", itemType:"Flight", flightId:"flight-sk3438", title:"JFK Airport Terminal 4 → TPA - Tampa International Airport", from:"JFK Airport Terminal 4", to:"TPA - Tampa International Airport", mode:"Flight SK3438 (Delta)", time:"3h 23m", status:"Confirmed", instructions:"Check Delta app for gate.", notes:"" },
      { id:"tl-0039", travelId:"travel-39", date:"2026-10-15", start:"23:13", end:"23:55", itemType:"Train", title:"Take SkyConnect from TPA baggage claim to Economy Parking", from:"TPA Airport baggage claim", to:"TPA Airport Economy Parking", mode:"SkyConnect Train", time:"30-45 min", status:"Confirmed", instructions:"Collect bags, follow signs to SkyConnect, ride to Economy Parking, and use the parking-location photo.", notes:"Inspect vehicle before leaving." },
      { id:"tl-0040", travelId:"travel-40", date:"2026-10-16", start:"00:00", end:"01:15", itemType:"Car / Drive", title:"Drive home to Spring Hill", from:"TPA Airport Economy Parking", to:"Spring Hill, FL", mode:"Drive", time:"60-75 min", status:"Confirmed", instructions:"Drive via Veterans / Suncoast. Stop if fatigued.", notes:"Expected home after midnight." },
    ];


    // Master shared travel/activity records. Timeline, Travel and Maps read from these records.
    // Flights and hotels remain in their own master collections.
    const SHARED_TRAVEL_ITEMS = TIMELINE
      .filter(t => t.travelId)
      .map(t => ({
        id: t.travelId,
        timelineId: t.id,
        date: t.date || "",
        start: t.start || "",
        end: t.end || "",
        itemType: t.itemType || "Information",
        title: t.title || "",
        from: t.from || "",
        to: t.to || "",
        mode: t.mode || "",
        duration: t.time || "",
        status: t.status || "Confirmed",
        instructions: t.instructions || "",
        notes: t.notes || ""
      }));

    const RESERVATIONS = [
      {id:"reservation-0001", item:"Air reservation", provider:"Delta / SAS", conf:"H9BVBD / AZ3BUA", dates:"Oct 4–15", status:"Confirmed", notes:"Store PDFs offline on both phones" },
      {id:"reservation-0002", item:"Rome hotel", hotelId:"hotel-rome-anantara", provider:"Anantara Palazzo Naiadi", conf:"Event-provided", dates:"Oct 5–8", status:"Confirmed", notes:"Need room confirmation and check-in details" },
      {id:"reservation-0003", item:"Florence hotel", hotelId:"hotel-florence-w", provider:"W Florence", conf:"Event-provided", dates:"Oct 8–10", status:"Confirmed", notes:"Need room confirmation and breakfast details" },
      {id:"reservation-0004", item:"Rome to Florence train", provider:"PSA group travel", conf:"TBD", dates:"Oct 8", status:"Pending", notes:"Need station, train number, times, coach, seats" },
      {id:"reservation-0005", item:"Possible PSA Florence-to-Venice group transfer", provider:"PSA", conf:"Event-provided", dates:"Oct 10", status:"Alternative", notes:"Possible backup only. Italo 8904 Club Executive remains the confirmed primary plan." },
      {id:"reservation-0006", item:"Italo Florence-to-Venice ticket", provider:"Italo", conf:"EM7VNB / Rec. 118932941", dates:"Oct 10", status:"Confirmed", notes:"Primary plan: Italo 8904, 9:39–11:55 AM; Club Executive; Coach 1 seats 13 & 16; €177.76. Cancel only if the final PSA group transfer becomes clearly preferable." },
      {id:"reservation-0007", item:"Venice hotel (group)", hotelId:"hotel-venice-jw", provider:"JW Marriott Venice", conf:"Event-provided", dates:"Oct 10–13", status:"Confirmed", notes:"Confirm room details, island shuttle schedule and transfer from central Venice." },
      {id:"reservation-0008", item:"Venice excursion selection", provider:"PSA", conf:"TBD", dates:"Oct 11", status:"Decision Needed", notes:"Choose Ciao Venice OR Murano & Burano" },
      {id:"reservation-0009", item:"Conference registration", provider:"PSA Convention 2026", conf:"NCN4K9C4SJD / WGNRXC5J54C", dates:"Oct 5–12", status:"Confirmed", notes:"Add final registration record and excursion page offline" },
      {id:"reservation-0010", item:"Venice hotel 2", hotelId:"hotel-venice-antiche", provider:"Hotel Antiche Figure", conf:"PO55JT57ZW", dates:"Oct 13–15", status:"Confirmed / Pay Later", notes:"Superior Double; €620 due 7 days before via payment link; €16 city tax on site. Free cancellation until 5 days before." }
    ];

    const OPEN_ITEMS = [
      { id:"open-0001", pri:1, item:"Joe Lynch private Rome agenda", area:"Conference", urgency:"High", status:"Pending", why:"Completes Oct 6–8 activities and transport" },
      { id:"open-0002", pri:2, item:"Rome to Florence train details", area:"Transportation", urgency:"High", status:"Pending", why:"Needed for Oct 8 departure and Florence arrival" },
      { id:"open-0003", pri:3, item:"Confirm JW Venice full property / room details", area:"Hotel / Transport", urgency:"High", status:"Pending", why:"Needed for shuttle, arrival and airport departure logistics" },
      { id:"open-0004", pri:4, item:"Reconfirm Italo 8904 remains the primary Florence-to-Venice plan", area:"Transportation", urgency:"Medium", status:"Optional", why:"Keep the excellent Club Executive seats; cancel only if the final PSA group transfer becomes clearly preferable." },
      { id:"open-0005", pri:5, item:"Select Oct 11 Venice excursion", area:"Conference", urgency:"High", status:"Pending", why:"Choose Ciao Venice OR Murano & Burano" },
      { id:"open-0006", pri:6, item:"Flight seat assignments", area:"Flights", urgency:"Medium", status:"Pending", why:"Completes flight preparation" },
      { id:"open-0007", pri:7, item:"Awards dinner dress code and coach time", area:"Conference", urgency:"Medium", status:"Pending", why:"Finalizes Oct 7 plan" },
      { id:"open-0008", pri:8, item:"Giardino Corsini transport and dress code", area:"Conference", urgency:"Medium", status:"Pending", why:"Finalizes Oct 8 evening" },
      { id:"open-0009", pri:9, item:"Download Venice Excursions page", area:"Conference", urgency:"Medium", status:"Pending", why:"Keep details available offline" },
      { id:"open-0010", pri:10, item:"Restaurant reservations", area:"Dining", urgency:"Low", status:"Optional", why:"Add only after private agenda is known" },
      { id:"open-0011", pri:11, item:"Hotel Antiche Figure booked", area:"Hotel", urgency:"Done", status:"Done", why:"Confirmation PO55JT57ZW; Superior Double Room." },
      { id:"open-0012", pri:12, item:"Pay Hotel Antiche Figure balance", area:"Budget / Hotel", urgency:"High", status:"Pending", why:"Payment link arrives 7 days before Oct 13; valid 48 hours. Balance €620." },
      { id:"open-0013", pri:13, item:"Confirm Hotel Antiche Figure to VCE transport", area:"Transportation", urgency:"Medium", status:"Pending", why:"Verify first ATVO/ACTV bus or pre-book private water taxi for Oct 15." }
    ];

    const CITY_CARDS = {
      rome: {
        hotel: "Anantara Palazzo Naiadi",
        mission: "Enjoy Rome, register for PSA, explore at a relaxed pace.",
        top5: ["Trevi Fountain", "Pantheon", "Piazza Navona", "Spanish Steps", "Colosseum"],
        eats: ["Roscioli", "Armando al Pantheon", "Osteria da Fortunata"],
        gelato: ["Giolitti", "Gelateria del Teatro", "Frigidarium"],
        transit: "Walk • Metro • White Taxi • Leonardo Express",
        emergency: "112"
      },
      florence: {
        hotel: "W Florence",
        mission: "Conference, Duomo, great food, prepare for Venice.",
        top5: ["Duomo", "Ponte Vecchio", "Accademia", "Mercato Centrale", "Signoria"],
        eats: ["Trattoria ZaZa", "Osteria Pastella", "All'Antico Vinaio"],
        shopping: "Leather • Mercato Centrale",
        transit: "Walk • Taxi if needed",
        emergency: "112"
      },
      venice: {
        hotel: "JW Marriott (then Antiche Figure)",
        mission: "Use vaporetto wisely and enjoy Venice without rushing.",
        top5: ["St. Mark's", "Rialto", "Grand Canal", "Murano", "Dorsoduro"],
        eats: ["Cantina Do Spade", "Osteria alle Testiere"],
        transit: "Walk • Vaporetto • Alilaguna • Water Taxi if required",
        reminder: "Bridge count matters more than distance.",
        emergency: "112"
      }
    };

    const RESTAURANTS = [
      // Rome — full spreadsheet list
      {id:"restaurant-0001",city:"Rome",name:"Armando al Pantheon",neigh:"Pantheon",style:"Classic Roman trattoria",price:"€€€",order:"Carbonara, coda alla vaccinara",best:"Lunch / Dinner",res:"Yes",access:"Walkable from Anantara",why:"Family-run institution; reserve well ahead",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Armando+al+Pantheon+Rome+Italy"},
      {id:"restaurant-0002",city:"Rome",name:"Hosteria Grappolo d'Oro",neigh:"Campo de' Fiori",style:"Traditional Roman",price:"€€€",order:"Seasonal Roman dishes",best:"Lunch / Dinner",res:"Recommended",access:"Walk / short taxi",why:"Central but respected for regional cooking",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Hosteria+Grappolo+d%E2%80%99Oro+Rome+Italy"},
      {id:"restaurant-0003",city:"Rome",name:"Trattoria Pennestri",neigh:"Ostiense",style:"Modern Roman trattoria",price:"€€€",order:"Seasonal pastas, offal, wine",best:"Lunch / Dinner",res:"Yes",access:"Taxi / Metro",why:"Local favorite with accessible wine list",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Trattoria+Pennestri+Rome+Italy"},
      {id:"restaurant-0004",city:"Rome",name:"SantoPalato",neigh:"San Giovanni",style:"Neo-Roman trattoria",price:"€€€",order:"Carbonara, quinto quarto",best:"Dinner",res:"Yes",access:"Metro / taxi",why:"Chef-driven but firmly Roman",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=SantoPalato+Rome+Italy"},
      {id:"restaurant-0005",city:"Rome",name:"Cesare al Casaletto",neigh:"Monteverde",style:"Roman trattoria",price:"€€",order:"Cacio e pepe, fried starters",best:"Lunch / Dinner",res:"Yes",access:"Taxi / tram",why:"Neighborhood destination worth leaving the center for",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Cesare+al+Casaletto+Rome+Italy"},
      {id:"restaurant-0006",city:"Rome",name:"Flavio al Velavevodetto",neigh:"Testaccio",style:"Traditional Roman",price:"€€€",order:"Gricia, cacio e pepe",best:"Lunch / Dinner",res:"Yes",access:"Taxi / Metro",why:"Testaccio classic built into Monte Testaccio",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Flavio+al+Velavevodetto+Rome+Italy"},
      {id:"restaurant-0007",city:"Rome",name:"Trattoria Monti",neigh:"Esquilino",style:"Marchigiano / Roman",price:"€€€",order:"Tortello al rosso d'uovo",best:"Lunch / Dinner",res:"Yes",access:"Walk / short taxi",why:"Small family-run favorite near Termini",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Trattoria+Monti+Rome+Italy"},
      {id:"restaurant-0008",city:"Rome",name:"Da Danilo",neigh:"Esquilino",style:"Classic Roman",price:"€€€",order:"Carbonara, amatriciana",best:"Lunch / Dinner",res:"Yes",access:"Walkable",why:"Reliable traditional cooking close to the hotel zone",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Da+Danilo+Rome+Italy"},
      {id:"restaurant-0009",city:"Rome",name:"La Tavernaccia da Bruno",neigh:"Monteverde",style:"Roman / Lazio",price:"€€€",order:"Lasagna, roast meats",best:"Lunch / Dinner",res:"Yes",access:"Taxi",why:"Old-school family restaurant away from tourist crowds",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=La+Tavernaccia+da+Bruno+Rome+Italy"},
      {id:"restaurant-0010",city:"Rome",name:"Osteria Bonelli",neigh:"Tor Pignattara",style:"Roman neighborhood osteria",price:"€€",order:"Daily Roman specials",best:"Lunch / Dinner",res:"Recommended",access:"Taxi / tram",why:"Unpolished local atmosphere and generous cooking",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Osteria+Bonelli+Rome+Italy"},
      {id:"restaurant-0011",city:"Rome",name:"Checchino dal 1887",neigh:"Testaccio",style:"Historic Roman",price:"€€€",order:"Oxtail, offal, pajata",best:"Lunch / Dinner",res:"Yes",access:"Taxi / Metro",why:"One of the historic homes of cucina romana",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Checchino+dal+1887+Rome+Italy"},
      {id:"restaurant-0012",city:"Rome",name:"Piatto Romano",neigh:"Testaccio",style:"Traditional Roman",price:"€€",order:"Seasonal Roman classics",best:"Lunch / Dinner",res:"Recommended",access:"Taxi / Metro",why:"Straightforward neighborhood cooking",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Piatto+Romano+Rome+Italy"},
      {id:"restaurant-0013",city:"Rome",name:"L'Elementare",neigh:"Trastevere",style:"Roman pizza / supplì",price:"€€",order:"Pizza tonda, supplì",best:"Dinner",res:"Recommended",access:"Taxi / tram",why:"Strong pizza without chain feel",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=L%E2%80%99Elementare+Rome+Italy"},
      {id:"restaurant-0014",city:"Rome",name:"La Gatta Mangiona",neigh:"Monteverde",style:"Creative Roman pizza",price:"€€",order:"Long-fermented pizza",best:"Dinner",res:"Yes",access:"Taxi",why:"Longstanding serious pizza destination",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=La+Gatta+Mangiona+Rome+Italy"},
      {id:"restaurant-0015",city:"Rome",name:"Seu Pizza Illuminati",neigh:"Trastevere edge",style:"Contemporary pizza",price:"€€€",order:"Seasonal tasting pizzas",best:"Dinner",res:"Yes",access:"Taxi / tram",why:"Modern pizza worth booking",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Seu+Pizza+Illuminati+Rome+Italy"},
      {id:"restaurant-0016",city:"Rome",name:"Forno Campo de' Fiori",neigh:"Campo de' Fiori",style:"Bakery / pizza bianca",price:"€",order:"Pizza bianca, mortadella",best:"Breakfast / Lunch",res:"No",access:"Walk / short taxi",why:"Historic bakery; quick authentic stop",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Forno+Campo+de%E2%80%99+Fiori+Rome+Italy"},
      {id:"restaurant-0017",city:"Rome",name:"Supplizio",neigh:"Centro Storico",style:"Roman street food",price:"€",order:"Supplì",best:"Lunch / Snack",res:"No",access:"Walk / short taxi",why:"Focused on classic fried Roman snacks",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Supplizio+Rome+Italy"},
      {id:"restaurant-0018",city:"Rome",name:"Mordi e Vai",neigh:"Testaccio Market",style:"Roman sandwiches",price:"€",order:"Allesso and tripe sandwiches",best:"Lunch",res:"No",access:"Taxi / Metro",why:"Market counter beloved for Roman fillings",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Mordi+e+Vai+Rome+Italy"},
      {id:"restaurant-0019",city:"Rome",name:"Retrobottega",neigh:"Centro Storico",style:"Contemporary Italian",price:"€€€€",order:"Tasting menu, handmade pasta",best:"Lunch / Dinner",res:"Yes",access:"Walk / short taxi",why:"Modern cooking with serious technique",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Retrobottega+Rome+Italy"},
      {id:"restaurant-0020",city:"Rome",name:"Roscioli Salumeria con Cucina",neigh:"Regola",style:"Roman deli-restaurant",price:"€€€€",order:"Carbonara, cured meats",best:"Lunch / Dinner",res:"Required",access:"Walk / short taxi",why:"Famous but still excellent; book early",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Roscioli+Salumeria+con+Cucina+Rome+Italy"},
      {id:"restaurant-0021",city:"Rome",name:"Osteria da Fortunata",neigh:"Centro",style:"Roman trattoria",price:"€€",order:"Fresh pasta",best:"Lunch / Dinner",res:"Recommended",access:"Walk",why:"City-card pick; popular for made-to-order pasta",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Osteria+da+Fortunata+Rome+Italy"},
      // Florence — full spreadsheet list
      {id:"restaurant-0022",city:"Florence",name:"Trattoria Da Burde",neigh:"Peretola / west",style:"Traditional Florentine",price:"€€",order:"Ribollita, grilled meats",best:"Lunch / Dinner",res:"Yes",access:"Taxi / tram",why:"Family-run institution outside the tourist center",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Trattoria+Da+Burde+Florence+Italy"},
      {id:"restaurant-0023",city:"Florence",name:"Trattoria Cibrèo",neigh:"Sant'Ambrogio",style:"Tuscan trattoria",price:"€€€",order:"Soups, stews, seasonal dishes",best:"Lunch / Dinner",res:"Yes",access:"Walk / taxi",why:"Deeply rooted Tuscan cooking",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Trattoria+Cibr%C3%A8o+Florence+Italy"},
      {id:"restaurant-0024",city:"Florence",name:"Trattoria Sostanza",neigh:"Santa Maria Novella",style:"Historic Florentine",price:"€€€",order:"Butter chicken, tortino di carciofi",best:"Lunch / Dinner",res:"Required",access:"Walkable from W Florence",why:"Tiny classic; reserve far ahead",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Trattoria+Sostanza+Florence+Italy"},
      {id:"restaurant-0025",city:"Florence",name:"Osteria Vini e Vecchi Sapori",neigh:"Centro",style:"Tuscan osteria",price:"€€€",order:"Daily pasta and meat specials",best:"Lunch / Dinner",res:"Required",access:"Walkable",why:"Small, traditional, no-frills favorite",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Osteria+Vini+e+Vecchi+Sapori+Florence+Italy"},
      {id:"restaurant-0026",city:"Florence",name:"Trattoria Mario",neigh:"San Lorenzo",style:"Florentine trattoria",price:"€€",order:"Bistecca, ribollita",best:"Lunch",res:"Recommended",access:"Walkable",why:"Communal tables and old-school lunch service",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Trattoria+Mario+Florence+Italy"},
      {id:"restaurant-0027",city:"Florence",name:"I' Brindellone",neigh:"San Frediano",style:"Tuscan trattoria",price:"€€",order:"Bistecca alla fiorentina",best:"Lunch / Dinner",res:"Yes",access:"Walk / taxi",why:"Neighborhood steak favorite in Oltrarno",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=I%E2%80%99+Brindellone+Florence+Italy"},
      {id:"restaurant-0028",city:"Florence",name:"Trattoria Da Ruggero",neigh:"Porta Romana",style:"Tuscan home cooking",price:"€€",order:"Roasts, soups, seasonal plates",best:"Lunch / Dinner",res:"Recommended",access:"Taxi / bus",why:"Low-key and local south of the center",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Trattoria+Da+Ruggero+Florence+Italy"},
      {id:"restaurant-0029",city:"Florence",name:"Trattoria Sabatino",neigh:"San Frediano",style:"Budget Tuscan",price:"€",order:"Daily primi and secondi",best:"Lunch / Dinner",res:"No / Recommended",access:"Walk / taxi",why:"Simple local canteen-style cooking",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Trattoria+Sabatino+Florence+Italy"},
      {id:"restaurant-0030",city:"Florence",name:"Il Santo Bevitore",neigh:"Oltrarno",style:"Modern Tuscan",price:"€€€",order:"Seasonal pasta and meats",best:"Dinner",res:"Yes",access:"Walkable",why:"Polished but still grounded in Tuscan ingredients",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Il+Santo+Bevitore+Florence+Italy"},
      {id:"restaurant-0031",city:"Florence",name:"Osteria dell'Enoteca",neigh:"Oltrarno",style:"Tuscan / wine-focused",price:"€€€",order:"Bistecca, seasonal dishes",best:"Dinner",res:"Yes",access:"Walk / taxi",why:"Excellent wine program and regional cooking",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Osteria+dell%E2%80%99Enoteca+Florence+Italy"},
      {id:"restaurant-0032",city:"Florence",name:"Cucina",neigh:"Bellosguardo",style:"Contemporary Tuscan",price:"€€€",order:"Handmade pasta",best:"Dinner",res:"Yes",access:"Taxi",why:"Residential setting far from tourist chaos",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Cucina+Florence+Italy"},
      {id:"restaurant-0033",city:"Florence",name:"Pizzeria Giovanni Santarpia",neigh:"Galluzzo / south",style:"Neapolitan pizza",price:"€€",order:"Piennolo tomato pizza",best:"Dinner",res:"Recommended",access:"Taxi",why:"Highly regarded pizzaiolo; worth the detour",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Pizzeria+Giovanni+Santarpia+Florence+Italy"},
      {id:"restaurant-0034",city:"Florence",name:"Da Nerbone",neigh:"Mercato Centrale",style:"Florentine street food",price:"€",order:"Lampredotto, bollito",best:"Breakfast / Lunch",res:"No",access:"Walkable",why:"Historic market counter, not the upstairs food hall",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Da+Nerbone+Florence+Italy"},
      {id:"restaurant-0035",city:"Florence",name:"Semel",neigh:"Sant'Ambrogio",style:"Schiacciata sandwiches",price:"€",order:"Seasonal schiacciata",best:"Lunch",res:"No",access:"Walk / taxi",why:"Tiny local sandwich shop with inventive fillings",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Semel+Florence+Italy"},
      {id:"restaurant-0036",city:"Florence",name:"I Fratellini",neigh:"Centro",style:"Schiacciata / panini",price:"€",order:"Tuscan salumi sandwich",best:"Lunch",res:"No",access:"Walkable",why:"Historic hole-in-the-wall; quick and genuine",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=I+Fratellini+Florence+Italy"},
      {id:"restaurant-0037",city:"Florence",name:"Il Magazzino",neigh:"Oltrarno",style:"Lampredotto / Tuscan",price:"€€",order:"Lampredotto dishes",best:"Lunch / Dinner",res:"Recommended",access:"Walk / taxi",why:"Creative use of traditional offal",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Il+Magazzino+Florence+Italy"},
      {id:"restaurant-0038",city:"Florence",name:"Buca Lapi",neigh:"Centro",style:"Historic Tuscan",price:"€€€€",order:"Bistecca alla fiorentina",best:"Dinner",res:"Required",access:"Walkable",why:"Classic splurge in a historic cellar",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Buca+Lapi+Florence+Italy"},
      {id:"restaurant-0039",city:"Florence",name:"Ristorante Il Guscio",neigh:"San Frediano",style:"Tuscan / seafood",price:"€€€",order:"Seasonal fish and Tuscan plates",best:"Dinner",res:"Yes",access:"Walk / taxi",why:"Longtime neighborhood favorite",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Ristorante+Il+Guscio+Florence+Italy"},
      {id:"restaurant-0040",city:"Florence",name:"Enoteca Pitti Gola e Cantina",neigh:"Pitti / Oltrarno",style:"Wine bar / Tuscan",price:"€€€",order:"Wine flights, small plates",best:"Lunch / Evening",res:"Yes",access:"Walk / taxi",why:"Serious Tuscan wine and thoughtful food",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Enoteca+Pitti+Gola+e+Cantina+Florence+Italy"},
      {id:"restaurant-0041",city:"Florence",name:"Gelateria della Passera",neigh:"Oltrarno",style:"Artisan gelato",price:"€",order:"Seasonal gelato",best:"Dessert",res:"No",access:"Walk / taxi",why:"Small-batch gelato in a neighborhood piazza",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Gelateria+della+Passera+Florence+Italy"},
      {id:"restaurant-0042",city:"Florence",name:"Trattoria ZaZa",neigh:"San Lorenzo",style:"Tuscan trattoria",price:"€€",order:"Tuscan classics",best:"Lunch / Dinner",res:"Recommended",access:"Walkable",why:"City-card pick near the markets",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Trattoria+ZaZa+Florence+Italy"},
      {id:"restaurant-0043",city:"Florence",name:"Osteria Pastella",neigh:"Centro",style:"Pasta-focused",price:"€€",order:"Fresh pasta",best:"Lunch / Dinner",res:"Recommended",access:"Walkable",why:"City-card pick for pasta",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Osteria+Pastella+Florence+Italy"},
      {id:"restaurant-0044",city:"Florence",name:"All'Antico Vinaio",neigh:"Centro",style:"Schiacciata sandwiches",price:"€",order:"Loaded schiacciata",best:"Lunch",res:"No",access:"Walkable",why:"City-card pick; expect a queue",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=All%27Antico+Vinaio+Florence+Italy"},
      // Venice — full spreadsheet list
      {id:"restaurant-0045",city:"Venice",name:"Osteria alle Testiere",neigh:"Castello",style:"Venetian seafood",price:"€€€€",order:"Daily lagoon fish and shellfish",best:"Lunch / Dinner",res:"Required",access:"Hotel shuttle + walk",why:"Tiny, ingredient-driven, highly local",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Osteria+alle+Testiere+Venice+Italy"},
      {id:"restaurant-0046",city:"Venice",name:"Antiche Carampane",neigh:"San Polo",style:"Traditional Venetian seafood",price:"€€€€",order:"Spider crab, fish, moeche in season",best:"Lunch / Dinner",res:"Required",access:"Hotel shuttle + walk",why:"Hidden lane location and serious Venetian cooking",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Antiche+Carampane+Venice+Italy"},
      {id:"restaurant-0047",city:"Venice",name:"Al Covo",neigh:"Castello",style:"Venetian / Adriatic",price:"€€€€",order:"Seasonal fish and local produce",best:"Lunch / Dinner",res:"Yes",access:"Hotel shuttle + walk",why:"Longstanding family-run destination",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Al+Covo+Venice+Italy"},
      {id:"restaurant-0048",city:"Venice",name:"Vini da Gigio",neigh:"Cannaregio",style:"Venetian seafood",price:"€€€",order:"Fresh fish, risotto",best:"Lunch / Dinner",res:"Yes",access:"Hotel shuttle + walk",why:"Traditional menu and deep wine cellar",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Vini+da+Gigio+Venice+Italy"},
      {id:"restaurant-0049",city:"Venice",name:"Osteria Anice Stellato",neigh:"Cannaregio",style:"Modern Venetian",price:"€€€",order:"Lagoon seafood, seasonal dishes",best:"Dinner",res:"Yes",access:"Hotel shuttle + walk",why:"Quiet canal-side neighborhood favorite",priority:"Top 5",maps:"https://www.google.com/maps/search/?api=1&query=Osteria+Anice+Stellato+Venice+Italy"},
      {id:"restaurant-0050",city:"Venice",name:"La Zucca",neigh:"Santa Croce",style:"Vegetable-forward Venetian",price:"€€€",order:"Pumpkin flan, seasonal vegetables",best:"Lunch / Dinner",res:"Required",access:"Near Antiche Figure",why:"Not vegetarian-only, but vegetables are the star",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=La+Zucca+Venice+Italy"},
      {id:"restaurant-0051",city:"Venice",name:"Trattoria Ca d'Oro alla Vedova",neigh:"Cannaregio",style:"Traditional bacaro / trattoria",price:"€€",order:"Polpette, cicchetti, pasta",best:"Lunch / Dinner",res:"Recommended",access:"Hotel shuttle + walk",why:"Classic meatballs and old-Venice atmosphere",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Trattoria+Ca+d%E2%80%99Oro+alla+Vedova+Venice+Italy"},
      {id:"restaurant-0052",city:"Venice",name:"All'Arco",neigh:"San Polo / Rialto",style:"Bacaro / cicchetti",price:"€",order:"Cicchetti and panini",best:"Lunch",res:"No",access:"Hotel shuttle + walk",why:"Tiny stand-up stop favored around Rialto",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=All%E2%80%99Arco+Venice+Italy"},
      {id:"restaurant-0053",city:"Venice",name:"Cantina Do Spade",neigh:"San Polo",style:"Bacaro / Venetian",price:"€€",order:"Cicchetti, polenta, seafood",best:"Lunch / Dinner",res:"Recommended",access:"Hotel shuttle + walk",why:"Historic local bacaro near Rialto",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Cantina+Do+Spade+Venice+Italy"},
      {id:"restaurant-0054",city:"Venice",name:"Al Timon",neigh:"Cannaregio",style:"Bacaro / grill",price:"€€",order:"Cicchetti, grilled meats",best:"Lunch / Evening",res:"No / Recommended",access:"Hotel shuttle + walk",why:"Lively local canal-side hangout",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Al+Timon+Venice+Italy"},
      {id:"restaurant-0055",city:"Venice",name:"Cantinone Già Schiavi",neigh:"Dorsoduro",style:"Bacaro / cicchetti",price:"€",order:"Creative cicchetti, wine",best:"Lunch / Aperitivo",res:"No",access:"Hotel shuttle + walk",why:"Excellent standing-room snack and wine stop",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Cantinone+Gi%C3%A0+Schiavi+Venice+Italy"},
      {id:"restaurant-0056",city:"Venice",name:"Osteria La Bitta",neigh:"Dorsoduro",style:"Venetian meat-focused",price:"€€€",order:"Rabbit, duck, seasonal pasta",best:"Dinner",res:"Yes",access:"Hotel shuttle + walk",why:"Seafood-free change of pace in a quiet area",priority:"High",maps:"https://www.google.com/maps/search/?api=1&query=Osteria+La+Bitta+Venice+Italy"},
      {id:"restaurant-0057",city:"Venice",name:"Local",neigh:"Castello",style:"Contemporary Venetian",price:"€€€€",order:"Tasting menu, lagoon ingredients",best:"Dinner",res:"Yes",access:"Hotel shuttle + walk",why:"Modern take on Venetian sourcing",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Local+Venice+Italy"},
      {id:"restaurant-0058",city:"Venice",name:"CoVino",neigh:"Castello",style:"Modern Venetian osteria",price:"€€€",order:"Set menu, natural wine",best:"Dinner",res:"Yes",access:"Hotel shuttle + walk",why:"Small creative neighborhood dining room",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=CoVino+Venice+Italy"},
      {id:"restaurant-0059",city:"Venice",name:"Ai Promessi Sposi",neigh:"Cannaregio",style:"Venetian trattoria",price:"€€€",order:"Seafood pasta, local fish",best:"Lunch / Dinner",res:"Yes",access:"Hotel shuttle + walk",why:"Reliable neighborhood favorite",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Ai+Promessi+Sposi+Venice+Italy"},
      {id:"restaurant-0060",city:"Venice",name:"Osteria al Cicheto",neigh:"Cannaregio",style:"Venetian / wine bar",price:"€€€",order:"Cicchetti, pasta, wine",best:"Dinner",res:"Yes",access:"Hotel shuttle + walk",why:"Small, wine-focused, away from busiest lanes",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Osteria+al+Cicheto+Venice+Italy"},
      {id:"restaurant-0061",city:"Venice",name:"Trattoria da'a Marisa",neigh:"Cannaregio",style:"Home-style Venetian",price:"€€",order:"Fixed daily menu",best:"Lunch",res:"Required",access:"Hotel shuttle + walk",why:"No-frills workers' trattoria; very local",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Trattoria+da%E2%80%99a+Marisa+Venice+Italy"},
      {id:"restaurant-0062",city:"Venice",name:"Venissa Osteria Contemporanea",neigh:"Mazzorbo",style:"Lagoon cuisine",price:"€€€€",order:"Island produce and fish",best:"Lunch / Dinner",res:"Yes",access:"Boat trip",why:"Destination meal in the northern lagoon",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Venissa+Osteria+Contemporanea+Venice+Italy"},
      {id:"restaurant-0063",city:"Venice",name:"Rosticceria Gislon",neigh:"San Marco / Rialto",style:"Venetian quick service",price:"€",order:"Mozzarella in carrozza, fried seafood",best:"Lunch / Snack",res:"No",access:"Hotel shuttle + walk",why:"Fast, inexpensive local comfort food",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Rosticceria+Gislon+Venice+Italy"},
      {id:"restaurant-0064",city:"Venice",name:"Caffè Florian",neigh:"Piazza San Marco 57",style:"Historic Venetian café / coffee, cocktails and snacks",price:"€€€€",order:"Coffee or decide there",best:"Coffee / Aperitivo",res:"No",access:"Vaporetto Lines 1 or 2 to San Marco + walk",why:"Iconic Italian coffeehouse in Piazza San Marco, open since 1720",priority:"Good Option",website:"https://caffeflorian.com",hours:"Daily 9:00 AM–11:00 PM",maps:"https://www.google.com/maps/search/?api=1&query=Caff%C3%A8+Florian+Piazza+San+Marco+57+Venice+Italy"},
      {id:"restaurant-0065",city:"Venice",name:"Bacareto da Lele",neigh:"Santa Croce",style:"Bacaro / panini",price:"€",order:"Tiny panini and ombre",best:"Lunch / Aperitivo",res:"No",access:"Near Piazzale Roma / Antiche Figure",why:"Budget local favorite near Piazzale Roma",priority:"Good Option",maps:"https://www.google.com/maps/search/?api=1&query=Bacareto+da+Lele+Venice+Italy"}
    ];

    // Master air booking and flight records. All flight views read from these records.
    const AIR_BOOKING = {
      id:"air-main",
      travelers:"David & Melody",
      recordLocators:["H9BVBD","AZ3BUA"],
      notes:"Store itinerary PDFs offline on both phones. Confirm checked bags are tagged to FCO outbound and TPA on return."
    };

    const FLIGHTS = [
      {id:"flight-dl2706",bookingId:"air-main",date:"2026-10-04",flight:"DL2706",op:"Delta",from:"TPA - Tampa International Airport",dep:"11:39 AM",to:"BOS - Boston Logan Airport Terminal A",arr:"2:55 PM",dur:"3h 16m",cabin:"Economy",status:"Confirmed",notes:"Confirm bags tagged to FCO",timelineNotes:""},
      {id:"flight-sk928",bookingId:"air-main",date:"2026-10-04",flight:"SK928",op:"SAS",from:"BOS - Boston Logan Airport Terminal E",dep:"5:40 PM",to:"CPH - Copenhagen Airport",arr:"7:00 AM +1",dur:"7h 20m",cabin:"Premium Economy",status:"Confirmed",notes:"Set devices to Rome time, hydrate, and sleep after the meal.",timelineNotes:"Arrival is Oct 5."},
      {id:"flight-sk681",bookingId:"air-main",date:"2026-10-05",flight:"SK681",op:"SAS",from:"CPH - Copenhagen Airport",dep:"8:30 AM",to:"FCO - Rome Fiumicino Airport Terminal 1",arr:"11:05 AM",dur:"2h 35m",cabin:"Premium Economy",status:"Confirmed",notes:"Collect checked bags in Rome.",timelineNotes:""},
      {id:"flight-sk2692",bookingId:"air-main",date:"2026-10-15",flight:"SK2692",op:"SAS Connect",from:"VCE - Venice Marco Polo Airport",dep:"11:00 AM",to:"CPH - Copenhagen Airport",arr:"1:05 PM",dur:"2h 5m",cabin:"Premium Economy",status:"Confirmed",notes:"Confirm bags tagged to TPA.",timelineNotes:"Connection 1h 15m."},
      {id:"flight-sk915",bookingId:"air-main",date:"2026-10-15",flight:"SK915",op:"SAS",from:"CPH - Copenhagen Airport",dep:"2:20 PM",to:"JFK - New York John F. Kennedy Airport Terminal 1",arr:"5:00 PM",dur:"8h 40m",cabin:"Premium Economy",status:"Confirmed",notes:"Reclaim checked bags at JFK.",timelineNotes:"Most time-sensitive connection at CPH (exit passport control)."},
      {id:"flight-sk3438",bookingId:"air-main",date:"2026-10-15",flight:"SK3438",op:"Delta (operated)",from:"JFK - New York John F. Kennedy Airport Terminal 4",dep:"7:50 PM",to:"TPA - Tampa International Airport",arr:"11:13 PM",dur:"3h 23m",cabin:"Economy",status:"Confirmed",notes:"Check the Delta app for the departure gate.",timelineNotes:""}
    ];



    // Master hotel records. All hotel views read from these records.
    const HOTELS = [
      {id:"hotel-rome-anantara",city:"Rome",name:"Anantara Palazzo Naiadi",aliases:["Anantara Palazzo Naiadi Hotel"],checkIn:"2026-10-05",checkOut:"2026-10-08",dates:"Oct 5–8",conf:"Event-provided",status:"Confirmed",address:"Piazza della Repubblica 48-49",room:"Event-provided room",payment:"Provided by PSA / Joe Lynch program",tax:"Confirm with hotel",breakfast:"Confirm program inclusions",notes:"Need final room confirmation and check-in details.",maps:"https://www.google.com/maps/search/?api=1&query=Anantara+Palazzo+Naiadi+Rome"},
      {id:"hotel-florence-w",city:"Florence",name:"W Florence",aliases:["W Florence Hotel"],checkIn:"2026-10-08",checkOut:"2026-10-10",dates:"Oct 8–10",conf:"Event-provided",status:"Confirmed",address:"Via del Melarancio 1",room:"Event-provided room",payment:"Provided by PSA / Joe Lynch program",tax:"Confirm with hotel",breakfast:"Confirm breakfast details",notes:"Need final room confirmation and breakfast details.",maps:"https://www.google.com/maps/search/?api=1&query=W+Florence+Via+del+Melarancio+1"},
      {id:"hotel-venice-jw",city:"Venice",name:"JW Marriott Venice Resort & Spa",aliases:["JW Marriott Venice","JW Venice","JW Marriott Venice Resort & Spa Hotel"],checkIn:"2026-10-10",checkOut:"2026-10-13",dates:"Oct 10–13",conf:"Event-provided",status:"Confirmed",address:"Isola delle Rose",room:"Event-provided room",payment:"Provided by PSA / Joe Lynch program",tax:"Confirm with hotel",breakfast:"Confirm program inclusions",notes:"Confirm room details, island shuttle schedule, and transfer from central Venice.",maps:"https://www.google.com/maps/search/?api=1&query=JW+Marriott+Venice+Resort+Spa"},
      {id:"hotel-venice-antiche",city:"Venice",name:"Hotel Antiche Figure",aliases:["Antiche Figure"],checkIn:"2026-10-13",checkOut:"2026-10-15",dates:"Oct 13–15",conf:"PO55JT57ZW",status:"Confirmed / Pay Later",address:"Santa Croce 686, Fondamenta San Simeon Piccolo",room:"Superior Double",payment:"€620 due 7 days before via payment link",tax:"€16 city tax on site",breakfast:"Breakfast and gluten-free breakfast included",notes:"Free cancellation until 5 days before arrival.",maps:"https://www.google.com/maps/search/?api=1&query=Hotel+Antiche+Figure+Venice"}
    ];

    const GROUND = [
      {city:"Rome",mode:"Walk",best:"Historic center and hotel-area trips",pay:"Free",notes:"Good up to about 15 min; watch crowded streets and uneven paving."},
      {city:"Rome",mode:"Metro",best:"Longer cross-city trips",pay:"Official machines / contactless where available",notes:"Validate/tap as required. Moderate luggage. Watch pickpockets on busy lines."},
      {city:"Rome",mode:"Official white taxi",best:"Rain, fatigue, formal events",pay:"Meter / official rank / hotel-arranged",notes:"Use designated ranks only. Avoid unofficial drivers."},
      {city:"Florence",mode:"Walk",best:"Most central destinations",pay:"Free",notes:"Good for short transfers; stone streets and crowds."},
      {city:"Florence",mode:"Taxi",best:"Weather or luggage backup",pay:"Official rank / hotel-arranged",notes:"Unnecessary for most central trips."},
      {city:"Venice",mode:"Vaporetto",best:"Primary public water transport",pay:"ACTV ticket / pass",notes:"Validate before boarding. Good but crowded. Watch wrong direction/stop."},
      {city:"Venice",mode:"Alilaguna",best:"Airport water transfer option",pay:"Official ticket channels",notes:"Confirm line and stop. Longer elapsed time depending on hotel."},
      {city:"Venice",mode:"Airport bus (ATVO/ACTV)",best:"Piazzale Roma → VCE",pay:"ATVO/ACTV official ticket",notes:"Very good with luggage. Verify early-morning timetable; buy tickets 10/14."},
      {city:"Venice",mode:"Private water taxi",best:"Lowest-stress premium option",pay:"Prebook / hotel desk",notes:"Excellent with luggage. Confirm dock and pickup. High cost."}
    ];

    const CONTINGENCIES = [
      {scenario:"Delayed TPA→BOS flight",action:"Tell Delta before leaving the TPA/BOS aircraft that SK928 is on the same itinerary; check rebooking options.",contact:"Delta and SAS agents",avoid:"Do not leave the airport campus.",docs:"Boarding passes and delay notices",priority:"Critical"},
      {scenario:"Missed BOS→CPH connection",action:"Go directly to SAS service desk / app; request protected-itinerary rebooking.",contact:"SAS",avoid:"Do not buy a separate ticket before speaking to the airline.",docs:"Original itinerary and bag receipts",priority:"Critical"},
      {scenario:"Short CPH connection (inbound)",action:"Move directly; show boarding pass to staff at the passport-control queue.",contact:"SAS transfer staff",avoid:"Do not stop for food or shopping.",docs:"Boarding pass",priority:"Critical"},
      {scenario:"Bag missing at FCO",action:"File a report before leaving the baggage area; provide hotel address.",contact:"SAS baggage desk",avoid:"Do not leave without a PIR/reference number.",docs:"Bag tag receipts and photos",priority:"High"},
      {scenario:"Leonardo Express disruption",action:"Use official Trenitalia updates or the designated white taxi rank.",contact:"Trenitalia / FCO staff",avoid:"Do not accept unsolicited rides.",docs:"Rail ticket / refund record",priority:"High"},
      {scenario:"Rome→Florence group plan changes",action:"Follow the organizer message and meeting point.",contact:"PSA / group coordinator",avoid:"Do not self-route unless released.",docs:"Organizer instructions",priority:"Critical"},
      {scenario:"Missed Italo 8904",action:"Go to Italo assistance immediately; review ticket flexibility or rebooking.",contact:"Italo",avoid:"Do not board another train without a valid ticket.",docs:"Ticket EM7VNB / Rec. 118932941",priority:"High"},
      {scenario:"Venice strike / reduced service",action:"Ask the hotel for a live route; consider bus, Alilaguna, or a prebooked water taxi.",contact:"Hotel / ACTV / airport",avoid:"Do not rely on old screenshots.",docs:"Service notice",priority:"Critical"},
      {scenario:"JFK connection at risk",action:"Contact SAS/Delta transfer staff immediately after customs/recheck.",contact:"SAS / Delta",avoid:"Do not stop for food.",docs:"Inbound delay proof and boarding pass",priority:"Critical"},
      {scenario:"Too tired to drive from TPA",action:"Rest before driving or arrange an alternate ride.",contact:"Family / rideshare",avoid:"Do not force the drive.",docs:"—",priority:"High"}
    ];

    const PACKING = [
      {"id":"packing-0001","cat":"Clothing","traveler":"David","item":"Primary walking shoes","qty":1,"bag":"Wear","pri":"Critical","notes":"Break in before trip"},
      {"id":"packing-0002","cat":"Clothing","traveler":"Melody","item":"Primary walking shoes","qty":1,"bag":"Wear","pri":"Critical","notes":"Break in before trip"},
      {"id":"packing-0003","cat":"Documents","traveler":"David","item":"Passport book","qty":1,"bag":"Crossbody","pri":"Critical","notes":"Verify expiration and ticket name"},
      {"id":"packing-0004","cat":"Documents","traveler":"Melody","item":"Passport book","qty":1,"bag":"Crossbody","pri":"Critical","notes":"Verify expiration and ticket name"},
      {"id":"packing-0005","cat":"Electronics","traveler":"David","item":"Laptop charger","qty":1,"bag":"Backpack","pri":"Critical","notes":""},
      {"id":"packing-0006","cat":"Electronics","traveler":"David","item":"Work cellphone","qty":1,"bag":"Backpack","pri":"Critical","notes":""},
      {"id":"packing-0007","cat":"Electronics","traveler":"David","item":"Work laptop","qty":1,"bag":"Backpack","pri":"Critical","notes":""},
      {"id":"packing-0008","cat":"Electronics","traveler":"David","item":"Personal cellphone","qty":1,"bag":"Crossbody","pri":"Critical","notes":""},
      {"id":"packing-0009","cat":"Electronics","traveler":"Melody","item":"Personal cellphone","qty":1,"bag":"Crossbody","pri":"Critical","notes":""},
      {"id":"packing-0010","cat":"Health","traveler":"David","item":"Prescription medications","qty":1,"bag":"Backpack","pri":"Critical","notes":"Original containers"},
      {"id":"packing-0011","cat":"Health","traveler":"Melody","item":"Prescription medications","qty":1,"bag":"Personal item","pri":"Critical","notes":"Original containers"},
      {"id":"packing-0012","cat":"Money","traveler":"David","item":"Primary credit card","qty":1,"bag":"Crossbody","pri":"Critical","notes":"No foreign transaction fee"},
      {"id":"packing-0013","cat":"Money","traveler":"Melody","item":"Primary credit card","qty":1,"bag":"Crossbody","pri":"Critical","notes":"No foreign transaction fee"},
      {"id":"packing-0014","cat":"Personal Care","traveler":"David","item":"Reading glasses","qty":1,"bag":"Backpack","pri":"Critical","notes":""},
      {"id":"packing-0015","cat":"Travel Gear","traveler":"David","item":"Checked roller suitcase","qty":1,"bag":"Checked","pri":"Critical","notes":""},
      {"id":"packing-0016","cat":"Travel Gear","traveler":"Melody","item":"Checked roller suitcase","qty":1,"bag":"Checked","pri":"Critical","notes":""},
      {"id":"packing-0017","cat":"Travel Gear","traveler":"David","item":"Backpack","qty":1,"bag":"Personal item","pri":"Critical","notes":""},
      {"id":"packing-0018","cat":"Travel Gear","traveler":"Melody","item":"Personal item bag","qty":1,"bag":"Personal item","pri":"Critical","notes":""},
      {"id":"packing-0019","cat":"Travel Gear","traveler":"David","item":"Crossbody anti-pickpocket bag","qty":1,"bag":"Wear","pri":"Critical","notes":""},
      {"id":"packing-0020","cat":"Travel Gear","traveler":"David","item":"Cell phone stand","qty":1,"bag":"Checked","pri":"Medium","notes":""},
      {"id":"packing-0021","cat":"Travel Gear","traveler":"Melody","item":"Crossbody anti-pickpocket bag","qty":1,"bag":"Wear","pri":"Critical","notes":""},
      {"id":"packing-0022","cat":"Clothing","traveler":"David","item":"Rain jacket/windbreaker","qty":1,"bag":"Backpack","pri":"High","notes":""},
      {"id":"packing-0023","cat":"Clothing","traveler":"Melody","item":"Business-casual outfits","qty":5,"bag":"Checked roller","pri":"High","notes":""},
      {"id":"packing-0024","cat":"Clothing","traveler":"David","item":"Collared shirts","qty":5,"bag":"Checked roller","pri":"High","notes":""},
      {"id":"packing-0025","cat":"Clothing","traveler":"David","item":"Light sweater/layer","qty":1,"bag":"Checked roller","pri":"High","notes":""},
      {"id":"packing-0026","cat":"Clothing","traveler":"Melody","item":"Light sweater/layer","qty":1,"bag":"Checked roller","pri":"High","notes":""},
      {"id":"packing-0027","cat":"Clothing","traveler":"David","item":"Long pants","qty":5,"bag":"Checked roller","pri":"High","notes":"Business casual / walking"},
      {"id":"packing-0028","cat":"Clothing","traveler":"David","item":"Socks","qty":10,"bag":"Checked roller","pri":"High","notes":""},
      {"id":"packing-0029","cat":"Clothing","traveler":"Melody","item":"Socks","qty":10,"bag":"Checked roller","pri":"High","notes":""},
      {"id":"packing-0030","cat":"Clothing","traveler":"David","item":"Underwear","qty":10,"bag":"Checked roller","pri":"High","notes":""},
      {"id":"packing-0031","cat":"Clothing","traveler":"Melody","item":"Underwear","qty":10,"bag":"Checked roller","pri":"High","notes":""},
      {"id":"packing-0032","cat":"Clothing","traveler":"Melody","item":"Rain jacket/windbreaker","qty":1,"bag":"Personal item","pri":"High","notes":""},
      {"id":"packing-0033","cat":"Documents","traveler":"Shared","item":"Printed flight/train/hotel confirmations","qty":1,"bag":"Backpack","pri":"High","notes":"One paper backup set"},
      {"id":"packing-0034","cat":"Documents","traveler":"David","item":"Driver license","qty":1,"bag":"Wallet","pri":"High","notes":""},
      {"id":"packing-0035","cat":"Documents","traveler":"Melody","item":"Driver license","qty":1,"bag":"Wallet","pri":"High","notes":""},
      {"id":"packing-0036","cat":"Electronics","traveler":"Shared","item":"Multi-port USB charger","qty":1,"bag":"Backpack","pri":"High","notes":""},
      {"id":"packing-0037","cat":"Electronics","traveler":"David","item":"Power bank","qty":1,"bag":"Backpack","pri":"High","notes":"Carry-on only"},
      {"id":"packing-0038","cat":"Electronics","traveler":"Shared","item":"Universal Type C/F/L adapters","qty":3,"bag":"Backpack","pri":"High","notes":""},
      {"id":"packing-0039","cat":"Electronics","traveler":"Melody","item":"Power bank","qty":1,"bag":"Personal item","pri":"High","notes":"Carry-on only"},
      {"id":"packing-0040","cat":"Money","traveler":"Shared","item":"Backup credit card","qty":1,"bag":"Separate secure location","pri":"High","notes":"Do not keep with primary cards"},
      {"id":"packing-0041","cat":"Personal Care","traveler":"Melody","item":"Makeup bag","qty":1,"bag":"Checked roller","pri":"High","notes":""},
      {"id":"packing-0042","cat":"Personal Care","traveler":"David","item":"Toiletries","qty":1,"bag":"Checked roller","pri":"High","notes":"Travel-size carry-on essentials separately"},
      {"id":"packing-0043","cat":"Personal Care","traveler":"Melody","item":"Toiletries","qty":1,"bag":"Checked roller","pri":"High","notes":""},
      {"id":"packing-0044","cat":"Travel Gear","traveler":"Shared","item":"Luggage tags","qty":2,"bag":"Checked rollers","pri":"High","notes":"Include mobile number"},
      {"id":"packing-0045","cat":"Work/Conference","traveler":"David","item":"Business cards","qty":1,"bag":"Backpack","pri":"High","notes":"Bring more than expected"},
      {"id":"packing-0046","cat":"Work/Conference","traveler":"David","item":"Conference badge/registration info","qty":1,"bag":"Backpack","pri":"High","notes":""},
      {"id":"packing-0047","cat":"Clothing","traveler":"David","item":"Casual outfits","qty":2,"bag":"Checked roller","pri":"Medium","notes":""},
      {"id":"packing-0048","cat":"Clothing","traveler":"Melody","item":"Casual outfits","qty":2,"bag":"Checked roller","pri":"Medium","notes":""},
      {"id":"packing-0049","cat":"Clothing","traveler":"David","item":"Second pair of shoes","qty":1,"bag":"Checked roller","pri":"Medium","notes":"Dressier / backup"},
      {"id":"packing-0050","cat":"Clothing","traveler":"Melody","item":"Second pair of shoes","qty":1,"bag":"Checked roller","pri":"Medium","notes":""},
      {"id":"packing-0051","cat":"Clothing","traveler":"David","item":"Sleepwear","qty":1,"bag":"Checked roller","pri":"Medium","notes":""},
      {"id":"packing-0052","cat":"Clothing","traveler":"Melody","item":"Sleepwear","qty":1,"bag":"Checked roller","pri":"Medium","notes":""},
      {"id":"packing-0053","cat":"Documents","traveler":"Shared","item":"Travel insurance details","qty":1,"bag":"Backpack","pri":"Medium","notes":"Policy number and contact info"},
      {"id":"packing-0054","cat":"Electronics","traveler":"David","item":"Earbuds and charging case","qty":1,"bag":"Backpack","pri":"Medium","notes":""},
      {"id":"packing-0055","cat":"Electronics","traveler":"David","item":"Smart watch and charger","qty":1,"bag":"Backpack","pri":"Medium","notes":""},
      {"id":"packing-0056","cat":"Electronics","traveler":"Melody","item":"Earbuds and charging case","qty":1,"bag":"Personal item","pri":"Medium","notes":""},
      {"id":"packing-0057","cat":"Electronics","traveler":"Melody","item":"Smart watch and charger","qty":1,"bag":"Personal item","pri":"Medium","notes":""},
      {"id":"packing-0058","cat":"Health","traveler":"Shared","item":"Advil","qty":1,"bag":"Backpack","pri":"Medium","notes":""},
      {"id":"packing-0059","cat":"Money","traveler":"Shared","item":"Limited euros","qty":100,"bag":"Split between travelers","pri":"Medium","notes":"Small bills and coins"},
      {"id":"packing-0060","cat":"Personal Care","traveler":"Melody","item":"Hair tools","qty":1,"bag":"Checked roller","pri":"Medium","notes":"Confirm dual voltage"},
      {"id":"packing-0061","cat":"Personal Care","traveler":"Shared","item":"Umbrella","qty":1,"bag":"Checked roller","pri":"Medium","notes":"Compact travel umbrella"},
      {"id":"packing-0062","cat":"Personal Care","traveler":"David","item":"Sunglasses","qty":1,"bag":"Crossbody","pri":"Medium","notes":""},
      {"id":"packing-0063","cat":"Personal Care","traveler":"Melody","item":"Sunglasses","qty":1,"bag":"Crossbody","pri":"Medium","notes":""},
      {"id":"packing-0064","cat":"Travel Gear","traveler":"Shared","item":"Reusable water bottles","qty":2,"bag":"Backpack/personal item","pri":"Medium","notes":"Empty through security"},
      {"id":"packing-0065","cat":"Travel Gear","traveler":"Shared","item":"Luggage scale","qty":1,"bag":"Home only","pri":"Medium","notes":"Use before departure"},
      {"id":"packing-0066","cat":"Work/Conference","traveler":"David","item":"Pen and notebook","qty":1,"bag":"Backpack","pri":"Medium","notes":""}
    ];

    const PHRASES = {
      "Greetings": [
        {en:"Hello (day)",it:"Buongiorno",pr:"bwon-jor-NO"},
        {en:"Good evening",it:"Buonasera",pr:"bwoh-nah-SEH-rah"},
        {en:"Goodbye",it:"Arrivederci",pr:"ah-ree-veh-DER-chee"},
        {en:"Please",it:"Per favore",pr:"pair fah-VOH-ray"},
        {en:"Thank you",it:"Grazie",pr:"GRAHT-see-eh"},
        {en:"You're welcome",it:"Prego",pr:"PRAY-go"}
      ],
      "Transportation": [
        {en:"Where is the train station?",it:"Dov'è la stazione?",pr:"doh-VEH la staht-see-OH-neh"},
        {en:"Two tickets, please",it:"Due biglietti, per favore",pr:"DOO-eh bee-lyet-TEE"},
        {en:"Which platform?",it:"Quale binario?",pr:"KWAH-leh bee-NAH-ree-oh"},
        {en:"Where is the gate?",it:"Dov'è il gate?",pr:""},
        {en:"I would like a taxi, please",it:"Vorrei un taxi, per favore",pr:""}
      ],
      "Hotels": [
        {en:"I have a reservation",it:"Ho una prenotazione",pr:"oh OO-na pray-noh-tah-TSYOH-neh"},
        {en:"Can I leave my luggage?",it:"Posso lasciare i bagagli?",pr:"POS-so lash-SHA-re"}
      ],
      "Restaurants": [
        {en:"The bill, please",it:"Il conto, per favore",pr:"eel KON-to"},
        {en:"Water",it:"Acqua",pr:"AH-kwah"},
        {en:"Coffee",it:"Caffè",pr:"kahf-FEH"},
        {en:"A table for two, please",it:"Un tavolo per due, per favore",pr:""}
      ],
      "Shopping": [
        {en:"How much?",it:"Quanto costa?",pr:"KWAN-to KOS-ta"},
        {en:"Too expensive",it:"Troppo caro",pr:"TROP-po CA-ro"}
      ],
      "Medical / Emergency": [
        {en:"I need a doctor",it:"Ho bisogno di un medico",pr:"oh bee-ZON-yo"},
        {en:"Pharmacy",it:"Farmacia",pr:"far-ma-CHEE-ah"},
        {en:"Emergency",it:"112",pr:"Italy-wide"}
      ],
      "Numbers": [
        {en:"One",it:"Uno",pr:"OO-no"},
        {en:"Two",it:"Due",pr:"DOO-eh"},
        {en:"Three",it:"Tre",pr:"treh"},
        {en:"Ten",it:"Dieci",pr:"dee-EH-chee"}
      ],
      "Quick Reference": [
        {en:"Excuse me",it:"Mi scusi",pr:""},
        {en:"Do you speak English?",it:"Parla inglese?",pr:""},
        {en:"Thank you",it:"Grazie",pr:"Most used"}
      ]
    };

    const SAFETY = {
      emergency: [
        {cat:"Italy Emergency",contact:"112",tel:"112",note:"Police / Fire / Medical – official EU emergency number"},
        {cat:"U.S. Embassy Rome",contact:"+39 06 46741",tel:"+390646741",note:"Via Vittorio Veneto 121 – passport / consular"},
        {cat:"U.S. State Department 24/7",contact:"+1 202-501-4444",tel:"+12025014444",note:"Overseas emergency assistance; works directly from a U.S. phone"},
        {cat:"U.S. Consulate Florence",contact:"Limited consular services",note:"Use for regional support; confirm current hours"},
        {cat:"U.S. Consulate Milan",contact:"Regional services",note:"Northern Italy regional support"},
        {cat:"Delta",contact:"delta.com / app",note:"Flight changes"},
        {cat:"SAS",contact:"flysas.com / app",note:"Flight changes"},
        {cat:"Italo",contact:"italotreno.com",note:"Ticket EM7VNB"}
      ],
      medical: [
        "Look for a green cross for pharmacies; many pharmacists speak some English.",
        "Carry prescriptions in original containers in the carry-on.",
        "Record travel insurance policy number and contact offline before departure."
      ],
      tips: [
        "Keep crossbody bag in front in crowded areas (pickpockets).",
        "Dial 112 throughout Italy.",
        "Carry passport securely; keep a copy separate.",
        "Ignore bracelet, flower, and petition scams.",
        "Validate paper tickets on Metro/trains where required.",
        "Arrive early for Italo boarding.",
        "Cappuccino is usually a morning drink.",
        "Don't display phones while navigating in crowds."
      ],
      lost: [
        {item:"Passport",action:"Contact local police and U.S. Embassy Rome (+39 06 46741)."},
        {item:"Credit card",action:"Call the issuer immediately; use backup card kept separately."},
        {item:"Phone",action:"Use Find My / Android Find; contact carrier if needed."}
      ],
      alerts: [
        "Italian Civil Protection – weather alerts",
        "U.S. State Department – travel advisories",
        "Airline apps (Delta / SAS) – operational notifications"
      ]
    };

    const ATTRACTIONS = [
      {id:"attraction-0001",city:"Rome",name:"Trevi Fountain",area:"Trevi",why:"Iconic Baroque fountain",hours:"Controlled daytime; verify",cost:"€2 close-access; distant free",reserve:"Recommended",visit:"30–45 min",fromHotel:"≈15 min walk",transport:"Walk",maps:"https://www.google.com/maps/search/?api=1&query=Trevi+Fountain+Rome"},
      {id:"attraction-0002",city:"Rome",name:"Pantheon",area:"Piazza della Rotonda",why:"Extraordinary preserved Roman interior and dome",hours:"Varies; verify",cost:"Ticketed",reserve:"Yes",visit:"45–75 min",fromHotel:"≈25 min walk",transport:"Walk / taxi",maps:"https://www.google.com/maps/search/?api=1&query=Pantheon+Rome"},
      {id:"attraction-0003",city:"Rome",name:"Colosseum & Roman Forum",area:"Colosseo",why:"Major ancient Rome experience",hours:"Timed entry; verify",cost:"Ticketed",reserve:"Yes",visit:"2.5–4 hr",fromHotel:"≈25–30 min walk",transport:"Metro / taxi / walk",maps:"https://www.google.com/maps/search/?api=1&query=Colosseum+Rome"},
      {id:"attraction-0004",city:"Rome",name:"Spanish Steps",area:"Spagna",why:"Classic central Rome walk",hours:"Open public",cost:"Free",reserve:"No",visit:"30–45 min",fromHotel:"≈18 min walk",transport:"Walk",maps:"https://www.google.com/maps/search/?api=1&query=Spanish+Steps+Rome"},
      {id:"attraction-0005",city:"Rome",name:"Piazza Navona",area:"Navona",why:"Bernini fountains and lively evening atmosphere",hours:"Open public",cost:"Free",reserve:"No",visit:"30–60 min",fromHotel:"≈30 min walk",transport:"Walk / taxi",maps:"https://www.google.com/maps/search/?api=1&query=Piazza+Navona+Rome"},
      {id:"attraction-0006",city:"Florence",name:"Duomo Complex",area:"Piazza del Duomo",why:"Cathedral, dome, baptistery",hours:"Varies by monument",cost:"Pass options vary",reserve:"Yes for dome",visit:"1.5–3 hr",fromHotel:"≈10–15 min walk",transport:"Walk",maps:"https://www.google.com/maps/search/?api=1&query=Florence+Duomo"},
      {id:"attraction-0007",city:"Florence",name:"Uffizi Galleries",area:"Piazzale degli Uffizi",why:"Renaissance masterpieces",hours:"Timed admission",cost:"Ticketed",reserve:"Yes",visit:"2–3 hr",fromHotel:"≈15–20 min walk",transport:"Walk",maps:"https://www.google.com/maps/search/?api=1&query=Uffizi+Gallery+Florence"},
      {id:"attraction-0008",city:"Florence",name:"Accademia Gallery",area:"Via Ricasoli",why:"Michelangelo’s David",hours:"Timed admission",cost:"Ticketed",reserve:"Yes",visit:"1–1.5 hr",fromHotel:"≈15–20 min walk",transport:"Walk",maps:"https://www.google.com/maps/search/?api=1&query=Accademia+Gallery+Florence"},
      {id:"attraction-0009",city:"Florence",name:"Ponte Vecchio",area:"Arno River",why:"Historic bridge and river views",hours:"Open",cost:"Free",reserve:"No",visit:"30–60 min",fromHotel:"≈15–20 min walk",transport:"Walk",maps:"https://www.google.com/maps/search/?api=1&query=Ponte+Vecchio+Florence"},
      {id:"attraction-0010",city:"Florence",name:"Palazzo Vecchio",area:"Piazza della Signoria",why:"Civic palace, historic rooms and tower options",hours:"Varies; verify",cost:"Ticketed",reserve:"Recommended",visit:"1.5–2 hr",fromHotel:"≈15–20 min walk",transport:"Walk",maps:"https://www.google.com/maps/search/?api=1&query=Palazzo+Vecchio+Florence"},
      {id:"attraction-0011",city:"Venice",name:"St. Mark’s Basilica",area:"Piazza San Marco",why:"Landmark basilica and mosaics",hours:"Timed/seasonal",cost:"Ticket options vary",reserve:"Yes",visit:"45–75 min",fromHotel:"JW shuttle + ≈5 min walk",transport:"JW shuttle + walk",maps:"https://www.google.com/maps/search/?api=1&query=St+Marks+Basilica+Venice"},
      {id:"attraction-0012",city:"Venice",name:"Doge’s Palace",area:"Piazza San Marco",why:"Grand state rooms, Bridge of Sighs",hours:"Timed admission",cost:"Ticketed",reserve:"Yes",visit:"2–3 hr",fromHotel:"JW shuttle + ≈5 min walk",transport:"JW shuttle + walk",maps:"https://www.google.com/maps/search/?api=1&query=Doges+Palace+Venice"},
      {id:"attraction-0013",city:"Venice",name:"Rialto Bridge & Market",area:"San Polo",why:"Classic Grand Canal view",hours:"Bridge always open; market mornings",cost:"Free",reserve:"No",visit:"1–1.5 hr",fromHotel:"JW shuttle + ≈15 min walk",transport:"JW shuttle + walk",maps:"https://www.google.com/maps/search/?api=1&query=Rialto+Bridge+Venice"},
      {id:"attraction-0014",city:"Venice",name:"Murano & Burano",area:"Lagoon Islands",why:"Glassmaking, colorful streets",hours:"Boat schedules vary",cost:"Transport + optional",reserve:"Recommended",visit:"4–7 hr",fromHotel:"Hotel boat + lagoon",transport:"Hosted excursion / vaporetto",maps:"https://www.google.com/maps/search/?api=1&query=Murano+Burano+Venice"},
      {id:"attraction-0015",city:"Venice",name:"Dorsoduro Walk",area:"Dorsoduro",why:"Quieter canals, galleries, cicchetti and neighborhood atmosphere",hours:"Flexible",cost:"Mostly free",reserve:"No",visit:"2–4 hr",fromHotel:"JW shuttle + ≈20–30 min / vaporetto",transport:"JW shuttle + walk / vaporetto",maps:"https://www.google.com/maps/search/?api=1&query=Dorsoduro+Venice"}
    ];

    const PHOTO_WISHLIST = [
      {city:"Rome",subject:"Trevi Fountain at night",priority:"High",bestTime:"~9:30 PM"},
      {city:"Rome",subject:"Pantheon",priority:"High",bestTime:"Morning"},
      {city:"Florence",subject:"Duomo",priority:"High",bestTime:"Sunrise"},
      {city:"Venice",subject:"Grand Canal",priority:"High",bestTime:"Sunset"}
    ];

    const BUDGET_PLANNED = [
      {id:"budget-0001",cat:"Flights",sub:"International airfare",amt:5254,cur:"USD",company:false,status:"Paid",notes:"Total for two including concierge tip"},
      {id:"budget-0002",cat:"Hotels",sub:"Rome – Anantara",amt:0,cur:"USD",company:true,status:"Booked",notes:"PSA provided"},
      {id:"budget-0003",cat:"Hotels",sub:"Florence – W Florence",amt:0,cur:"USD",company:true,status:"Booked",notes:"PSA provided"},
      {id:"budget-0004",cat:"Hotels",sub:"Venice – JW Marriott",amt:0,cur:"USD",company:true,status:"Pending",notes:"Company-selected"},
      {id:"budget-0005",cat:"Hotels",sub:"Venice – Antiche Figure",amt:620,cur:"EUR",company:false,status:"Booked / Pay Later",notes:"€620 room balance via payment link"},
      {id:"budget-0006",cat:"Taxes & Fees",sub:"Venice city tax (Antiche Figure)",amt:16,cur:"EUR",company:false,status:"Due On Site",notes:"Not included in €620 room total"},
      {id:"budget-0007",cat:"Trains",sub:"Italo 8904 Club Executive",amt:177.76,cur:"EUR",company:false,status:"Paid",notes:"EM7VNB"},
      {id:"budget-0008",cat:"Trains",sub:"Rome to Florence group train",amt:0,cur:"EUR",company:true,status:"Pending",notes:"Event-provided"},
      {id:"budget-0009",cat:"Ground",sub:"TPA Economy Parking",amt:264,cur:"USD",company:false,status:"Planned",notes:"12 days × ~$22; verify rate"},
      {id:"budget-0010",cat:"Ground",sub:"Tolls / SunPass",amt:35,cur:"USD",company:false,status:"Planned",notes:"Round-trip Florida estimate"},
      {id:"budget-0011",cat:"Ground",sub:"Leonardo Express",amt:28,cur:"EUR",company:false,status:"Planned",notes:"2 × €14 FCO → Termini"},
      {id:"budget-0012",cat:"Ground",sub:"Local transit & taxis",amt:250,cur:"EUR",company:false,status:"Planned",notes:"Metro, taxi, vaporetto, airport transfers"},
      {id:"budget-0013",cat:"Dining",sub:"Meals and drinks",amt:2160,cur:"USD",company:false,status:"Planned",notes:"Daily estimate for two"},
      {id:"budget-0014",cat:"Attractions",sub:"Tickets and tours",amt:600,cur:"USD",company:false,status:"Planned",notes:""},
      {id:"budget-0015",cat:"Shopping",sub:"Souvenirs and gifts",amt:750,cur:"USD",company:false,status:"Planned",notes:""},
      {id:"budget-0016",cat:"Tips & Fees",sub:"Tips, coperto, fees",amt:250,cur:"USD",company:false,status:"Planned",notes:"Cash-heavy miscellaneous"},
      {id:"budget-0017",cat:"Insurance",sub:"Travel insurance",amt:0,cur:"USD",company:false,status:"Pending",notes:"Add if purchased"},
      {id:"budget-0018",cat:"Miscellaneous",sub:"Contingency",amt:0,cur:"USD",company:false,status:"Planned",notes:"Buffer for unexpected costs"}
    ];

// ===================== MAPS & LINKS DATA (spreadsheet-aligned) =====================
const MAP_DOOR_ROUTES = [
  {
    "order": 1,
    "dateISO": "2026-10-04",
    "start": "06:45",
    "date": "Oct 4",
    "to": "TPA Economy Parking",
    "mode": "Drive",
    "duration": "75–105 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Spring+Hill,+FL&destination=Tampa+International+Airport+Economy+Parking",
    "backupLink": "",
    "status": "Ready",
    "note": "Use SunPass; photograph parking location",
    "secondaryNote": "",
    "from": "Spring Hill, FL"
  },
  {
    "order": 2,
    "dateISO": "2026-10-04",
    "start": "08:00",
    "date": "Oct 4",
    "to": "TPA Main Terminal / Delta",
    "mode": "SkyConnect",
    "duration": "10–20 min",
    "link": "https://www.tampaairport.com/parking",
    "backupLink": "",
    "status": "Ready",
    "note": "Elevator to Level 1; follow SkyConnect signs",
    "secondaryNote": "",
    "from": "TPA Economy Parking"
  },
  {
    "order": 3,
    "dateISO": "2026-10-04",
    "start": "11:39",
    "date": "Oct 4",
    "to": "Boston Logan Terminal A",
    "mode": "Flight DL2706",
    "duration": "3h 16m",
    "link": "https://www.delta.com/",
    "backupLink": "",
    "status": "Ready",
    "note": "Confirm bags tagged through to FCO",
    "secondaryNote": "",
    "from": "TPA"
  },
  {
    "order": 4,
    "dateISO": "2026-10-04",
    "start": "14:55",
    "date": "Oct 4",
    "to": "BOS - Boston Logan Airport Terminal E",
    "mode": "Airport shuttle / walk + TSA",
    "duration": "45–90 min",
    "link": "https://www.massport.com/logan-airport/getting-to-logan/on-airport-shuttle/",
    "backupLink": "",
    "status": "Verify day-of",
    "note": "Go directly to Terminal E",
    "secondaryNote": "",
    "from": "BOS - Boston Logan Airport Terminal A"
  },
  {
    "order": 5,
    "dateISO": "2026-10-04",
    "start": "17:40",
    "date": "Oct 4–5",
    "to": "Copenhagen Terminal 3",
    "mode": "SAS SK928",
    "duration": "7h 20m",
    "link": "https://www.flysas.com/",
    "backupLink": "",
    "status": "Ready",
    "note": "Sleep after meal; prepare passport before landing",
    "secondaryNote": "",
    "from": "BOS Terminal E"
  },
  {
    "order": 6,
    "dateISO": "2026-10-05",
    "start": "07:00",
    "date": "Oct 5",
    "to": "CPH Rome departure gate",
    "mode": "Walk + passport control",
    "duration": "90-min connection",
    "link": "https://www.cph.dk/en/practical/transfer",
    "backupLink": "",
    "status": "Verify day-of",
    "note": "Enter Schengen here; coffee only after reaching gate",
    "secondaryNote": "",
    "from": "CPH arrival gate"
  },
  {
    "order": 7,
    "dateISO": "2026-10-05",
    "start": "08:30",
    "date": "Oct 5",
    "to": "Rome FCO Terminal 1",
    "mode": "SAS SK681",
    "duration": "2h 35m",
    "link": "https://www.flysas.com/",
    "backupLink": "",
    "status": "Ready",
    "note": "Collect bags in Rome",
    "secondaryNote": "",
    "from": "CPH"
  },
  {
    "order": 8,
    "dateISO": "2026-10-05",
    "start": "11:05",
    "date": "Oct 5",
    "to": "Fiumicino Aeroporto rail station (Airport Train Station)",
    "mode": "Walk",
    "duration": "10–20 min",
    "link": "https://www.adr.it/web/aeroporti-di-roma-en/pax-fco-train",
    "backupLink": "",
    "status": "Ready",
    "note": "Follow train icons / Stazione FS",
    "secondaryNote": "",
    "from": "Rome FCO Terminal 1"
  },
  {
    "order": 9,
    "dateISO": "2026-10-05",
    "start": "12:15",
    "date": "Oct 5",
    "to": "Roma Termini (Train Station)",
    "mode": "Leonardo Express Train",
    "duration": "32 min",
    "link": "https://www.trenitalia.com/en/services/leonardo-express.html",
    "backupLink": "https://maps.app.goo.gl/oHVywad3D4CmP1eX7",
    "status": "Ready",
    "note": "Choose nonstop Leonardo Express, not FL1",
    "secondaryNote": "",
    "from": "Fiumicino Aeroporto rail station (Airport Train Station)"
  },
  {
    "order": 10,
    "dateISO": "2026-10-05",
    "start": "13:00",
    "date": "Oct 5",
    "to": "Anantara Palazzo Naiadi Hotel",
    "mode": "Walk",
    "duration": "10–15 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Roma+Termini&destination=Anantara+Palazzo+Naiadi+Rome+Hotel&travelmode=walking",
    "backupLink": "https://www.google.com/maps/search/?api=1&query=official+taxi+stand+Roma+Termini",
    "status": "Ready",
    "note": "Use taxi only if tired, raining, or luggage is difficult",
    "secondaryNote": "",
    "from": "Roma Termini (Train Station)"
  },
  {
    "order": 11,
    "dateISO": "2026-10-08",
    "start": "08:00",
    "date": "Oct 8",
    "to": "Roma Termini Train Station",
    "mode": "Walk - PSA group plan",
    "duration": "TBD",
    "link": "https://maps.app.goo.gl/NXvwdAqRMB15Jjh69",
    "backupLink": "",
    "status": "Pending",
    "note": "Roma Termini Train Station route is current; final train and exact departure time remain TBD",
    "secondaryNote": "",
    "from": "Anantara Palazzo Naiadi Hotel"
  },
  {
    "order": 12,
    "dateISO": "2026-10-08",
    "start": "12:00",
    "date": "Oct 8",
    "to": "W Florence Hotel",
    "mode": "Walk / group transfer",
    "duration": "5–10 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Firenze+Santa+Maria+Novella&destination=W+Florence&travelmode=walking",
    "backupLink": "",
    "status": "Pending station",
    "note": "Stay with group until released",
    "secondaryNote": "",
    "from": "Firenze S.M.N. Train Station"
  },
  {
    "order": 13,
    "dateISO": "2026-10-10",
    "start": "08:30",
    "date": "Oct 10",
    "to": "Firenze S.M.N. Train Station",
    "mode": "Walk",
    "duration": "5–10 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=W+Florence&destination=Firenze+Santa+Maria+Novella&travelmode=walking",
    "backupLink": "",
    "status": "Ready",
    "note": "Inside station by TBD",
    "secondaryNote": "",
    "from": "W Florence Hotel"
  },
  {
    "order": 14,
    "dateISO": "2026-10-10",
    "start": "09:39",
    "date": "Oct 10",
    "to": "Venezia Santa Lucia Train Station",
    "mode": "Italo 8904",
    "duration": "2h 16m",
    "link": "https://www.italotreno.com/en",
    "backupLink": "https://maps.app.goo.gl/R9eLZqRsKn4LzUu29",
    "status": "Ready",
    "note": "Primary plan: Coach 1, seats 13 and 16. May cancel only if PSA group transfer becomes preferable.",
    "secondaryNote": "",
    "from": "Firenze S.M.N. Train Station"
  },
  {
    "order": 15,
    "dateISO": "2026-10-10",
    "start": "12:00",
    "date": "Oct 10",
    "to": "JW Marriott Venice Resort & Spa Hotel",
    "mode": "PSA/JW group water transfer",
    "duration": "TBD",
    "link": "https://www.google.com/maps/search/?api=1&query=Venezia+Santa+Lucia+Station",
    "backupLink": "https://avm.avmspa.it/en/content/vaporetto",
    "status": "Pending group instructions",
    "note": "PSA will transfer the group from Venezia Santa Lucia Train Station to the island hotel; exact boat and meeting point TBD",
    "secondaryNote": "",
    "from": "Venezia Santa Lucia Train Station"
  },
  {
    "order": 16,
    "dateISO": "2026-10-13",
    "start": "10:00",
    "date": "Oct 13",
    "to": "Giardini Reali JW Marriott Shuttle Stop",
    "mode": "JW Marriott hotel shuttle boat",
    "duration": "TBD",
    "link": "https://www.google.com/maps/search/?api=1&query=Giardini+Reali+Venice",
    "backupLink": "https://www.marriott.com/en-us/hotels/vcejw-jw-marriott-venice-resort-and-spa/overview/",
    "status": "Ready",
    "note": "Take the JW Marriott shuttle boat from the island hotel to the Giardini Reali shuttle stop.",
    "secondaryNote": "",
    "from": "JW Marriott Venice Resort & Spa Hotel"
  },
  {
    "order": 16.1,
    "dateISO": "2026-10-13",
    "start": "11:00",
    "date": "Oct 13",
    "to": "Piazzale Roma Vaporetto Terminal G or F",
    "mode": "Vaporetto Line 2 water bus",
    "duration": "TBD",
    "link": "https://www.google.com/maps/search/?api=1&query=Giardini+Reali+Vaporetto+Stop+Venice",
    "backupLink": "https://avm.avmspa.it/en/content/vaporetto",
    "status": "Ready",
    "note": "Take Vaporetto Line 2 toward Piazzale Roma and exit at terminal G or F.",
    "secondaryNote": "Second leg of the JW Marriott to Hotel Antiche Figure transfer.",
    "from": "Giardini Reali Vaporetto Stop"
  },
  {
    "order": 16.2,
    "dateISO": "2026-10-13",
    "start": "11:30",
    "date": "Oct 13",
    "to": "Hotel Antiche Figure",
    "mode": "Walk",
    "duration": "10–15 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Piazzale+Roma+Venice&destination=Hotel+Antiche+Figure+Venice&travelmode=walking",
    "backupLink": "https://www.hotelantichefigure.it/",
    "status": "Ready",
    "note": "Do not cross Ponte della Costituzione / Calatrava Bridge. Turn right along the Grand Canal, cross two small bridges, then continue straight about 50 metres.",
    "secondaryNote": "Use the southern walking route described by the hotel website.",
    "from": "Piazzale Roma Vaporetto Terminal G or F"
  },
  {
    "order": 17,
    "dateISO": "2026-10-15",
    "start": "06:30",
    "date": "Oct 15",
    "to": "VCE - Venice Marco Polo Airport",
    "mode": "Walk + airport bus / Alilaguna / water taxi",
    "duration": "60–120 min",
    "link": "https://www.veneziaairport.it/en/transport/transfers.html",
    "backupLink": "https://www.alilaguna.it/en",
    "status": "Pending hotel",
    "note": "Target airport arrival about 8:00 AM",
    "secondaryNote": "",
    "from": "Hotel Antiche Figure"
  },
  {
    "order": 18,
    "dateISO": "2026-10-15",
    "start": "11:00",
    "date": "Oct 15",
    "to": "CPH",
    "mode": "SAS SK2692",
    "duration": "2h 5m",
    "link": "https://www.flysas.com/",
    "backupLink": "",
    "status": "Ready",
    "note": "Confirm bags tagged to TPA",
    "secondaryNote": "",
    "from": "VCE - Venice Marco Polo Airport"
  },
  {
    "order": 19,
    "dateISO": "2026-10-15",
    "start": "13:05",
    "date": "Oct 15",
    "to": "CPH U.S. departure gate",
    "mode": "Walk + exit passport control",
    "duration": "75-min connection",
    "link": "https://www.cph.dk/en/practical/transfer",
    "backupLink": "",
    "status": "Verify day-of",
    "note": "Shortest connection; move immediately",
    "secondaryNote": "",
    "from": "CPH Schengen gate"
  },
  {
    "order": 20,
    "dateISO": "2026-10-15",
    "start": "14:20",
    "date": "Oct 15",
    "to": "JFK - New York John F. Kennedy Airport Terminal 1",
    "mode": "SAS SK915",
    "duration": "8h 40m",
    "link": "https://www.flysas.com/",
    "backupLink": "",
    "status": "Ready",
    "note": "Prepare for U.S. immigration and bag reclaim",
    "secondaryNote": "",
    "from": "CPH"
  },
  {
    "order": 21,
    "dateISO": "2026-10-15",
    "start": "17:00",
    "date": "Oct 15",
    "to": "JFK Airport Terminal 4",
    "mode": "Immigration + bag claim + AirTrain + TSA",
    "duration": "2h 50m connection",
    "link": "https://www.jfkairport.com/to-from-airport/air-train",
    "backupLink": "https://www.google.com/maps/dir/?api=1&origin=JFK+Terminal+1&destination=JFK+Terminal+4",
    "status": "Ready",
    "note": "Reclaim and recheck bags before AirTrain",
    "secondaryNote": "",
    "from": "JFK Airport Terminal 1"
  },
  {
    "order": 22,
    "dateISO": "2026-10-15",
    "start": "19:50",
    "date": "Oct 15",
    "to": "TPA - Tampa International Airport",
    "mode": "Delta-operated SK3438",
    "duration": "3h 23m",
    "link": "https://www.delta.com/",
    "backupLink": "",
    "status": "Ready",
    "note": "Go directly to gate after TSA",
    "secondaryNote": "",
    "from": "JFK Airport Terminal 4"
  },
  {
    "order": 23,
    "dateISO": "2026-10-15",
    "start": "23:13",
    "date": "Oct 15",
    "to": "TPA Airport Economy Parking",
    "mode": "Walk + SkyConnect airport train",
    "duration": "30–45 min",
    "link": "https://www.tampaairport.com/parking",
    "backupLink": "",
    "status": "Ready",
    "note": "Collect bags, follow SkyConnect signs, and use the saved parking photo.",
    "secondaryNote": "",
    "from": "TPA Airport baggage claim"
  },
  {
    "order": 23.1,
    "dateISO": "2026-10-16",
    "start": "00:00",
    "date": "Oct 16",
    "to": "Spring Hill, FL",
    "mode": "Personal vehicle",
    "duration": "60–75 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Tampa+International+Airport+Economy+Parking&destination=Spring+Hill,+FL",
    "backupLink": "",
    "status": "Ready",
    "note": "Drive via Veterans Expressway / Suncoast Parkway and stop if driver fatigue is significant.",
    "secondaryNote": "",
    "from": "TPA Airport Economy Parking"
  }
];

const MAP_CITY_ROUTES = [
  {
    "order": 101,
    "dateISO": "2026-10-06",
    "start": "",
    "date": "Sightseeing",
    "from": "Rome",
    "to": "Anantara to Trevi Fountain",
    "mode": "Sightseeing",
    "duration": "~20 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Anantara+Palazzo+Naiadi+Rome+Hotel&destination=Trevi+Fountain&travelmode=walking",
    "backupLink": "",
    "status": "Ready",
    "note": "Best early or late",
    "secondaryNote": "City route from spreadsheet"
  },
  {
    "order": 102,
    "dateISO": "2026-10-06",
    "start": "",
    "date": "Sightseeing",
    "from": "Rome",
    "to": "Anantara to Spanish Steps",
    "mode": "Sightseeing",
    "duration": "~25 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Anantara+Palazzo+Naiadi+Rome+Hotel&destination=Spanish+Steps&travelmode=walking",
    "backupLink": "",
    "status": "Ready",
    "note": "Combine with Trevi",
    "secondaryNote": "City route from spreadsheet"
  },
  {
    "order": 103,
    "dateISO": "2026-10-06",
    "start": "",
    "date": "Sightseeing",
    "from": "Rome",
    "to": "Anantara to Pantheon",
    "mode": "Sightseeing",
    "duration": "~30 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Anantara+Palazzo+Naiadi+Rome+Hotel&destination=Pantheon+Rome&travelmode=walking",
    "backupLink": "",
    "status": "Ready",
    "note": "Continue to Piazza Navona",
    "secondaryNote": "City route from spreadsheet"
  },
  {
    "order": 104,
    "dateISO": "2026-10-06",
    "start": "",
    "date": "Sightseeing",
    "from": "Rome",
    "to": "Anantara to Colosseum",
    "mode": "Sightseeing",
    "duration": "30–35 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Anantara+Palazzo+Naiadi+Rome+Hotel&destination=Colosseum&travelmode=walking",
    "backupLink": "",
    "status": "Ready",
    "note": "Metro may be faster",
    "secondaryNote": "City route from spreadsheet"
  },
  {
    "order": 105,
    "dateISO": "2026-10-09",
    "start": "",
    "date": "Sightseeing",
    "from": "Florence",
    "to": "W Florence to Duomo",
    "mode": "Orientation",
    "duration": "8–12 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=W+Florence&destination=Florence+Cathedral&travelmode=walking",
    "backupLink": "",
    "status": "Ready",
    "note": "Simple first walk",
    "secondaryNote": "City route from spreadsheet"
  },
  {
    "order": 106,
    "dateISO": "2026-10-09",
    "start": "",
    "date": "Sightseeing",
    "from": "Florence",
    "to": "W Florence to Accademia",
    "mode": "Museum",
    "duration": "10–15 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=W+Florence&destination=Accademia+Gallery+Florence&travelmode=walking",
    "backupLink": "",
    "status": "Ready",
    "note": "Timed ticket recommended",
    "secondaryNote": "City route from spreadsheet"
  },
  {
    "order": 107,
    "dateISO": "2026-10-09",
    "start": "",
    "date": "Sightseeing",
    "from": "Florence",
    "to": "W Florence to Ponte Vecchio",
    "mode": "Sightseeing",
    "duration": "18–22 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=W+Florence&destination=Ponte+Vecchio&travelmode=walking",
    "backupLink": "",
    "status": "Ready",
    "note": "Good evening walk",
    "secondaryNote": "City route from spreadsheet"
  },
  {
    "order": 108,
    "dateISO": "2026-10-14",
    "start": "",
    "date": "Sightseeing",
    "from": "Venice",
    "to": "Venezia S.L. to Hotel Antiche Figure",
    "mode": "Hotel transfer",
    "duration": "~5-10 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Venezia+Santa+Lucia&destination=Hotel+Antiche+Figure+Venice&travelmode=walking",
    "backupLink": "",
    "status": "Ready",
    "note": "Cross Scalzi Bridge, turn right, then walk about 50 m.",
    "secondaryNote": "City route from spreadsheet"
  },
  {
    "order": 109,
    "dateISO": "2026-10-14",
    "start": "",
    "date": "Sightseeing",
    "from": "Venice",
    "to": "Hotel Antiche Figure to VCE via Piazzale Roma",
    "mode": "Airport departure",
    "duration": "60-90 min",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Antiche+Figure+Venice&destination=Venice+Marco+Polo+Airport&travelmode=transit",
    "backupLink": "",
    "status": "Verify timetable",
    "note": "Walk to Piazzale Roma, then ATVO/ACTV airport bus; private water taxi backup.",
    "secondaryNote": "City route from spreadsheet"
  }
];

const MAP_AIRPORTS = [
  {
    "name": "Tampa International",
    "code": "TPA",
    "tripUse": "Departure & return",
    "official": "https://www.tampaairport.com/",
    "secondary": "https://www.tampaairport.com/parking",
    "concern": "Economy parking / SkyConnect",
    "action": "Verify rate and SunPass Plus",
    "status": "Ready"
  },
  {
    "name": "Boston Logan",
    "code": "BOS",
    "tripUse": "Domestic-to-international connection",
    "official": "https://www.massport.com/logan-airport",
    "secondary": "https://www.massport.com/logan-airport/getting-to-logan/on-airport-shuttle/",
    "concern": "Terminal A to E + TSA",
    "action": "Confirm gate immediately after landing",
    "status": "Verify day-of"
  },
  {
    "name": "Copenhagen Airport",
    "code": "CPH",
    "tripUse": "Schengen entry and exit",
    "official": "https://www.cph.dk/en",
    "secondary": "https://www.cph.dk/en/practical/transfer",
    "concern": "Short passport-control connections",
    "action": "Move directly to gate",
    "status": "Verify day-of"
  },
  {
    "name": "Rome Fiumicino",
    "code": "FCO",
    "tripUse": "Italy arrival",
    "official": "https://www.adr.it/web/aeroporti-di-roma-en/pax-fco",
    "secondary": "https://www.adr.it/web/aeroporti-di-roma-en/pax-fco-train",
    "concern": "Finding rail station",
    "action": "Follow train icons; ignore solicitors",
    "status": "Ready"
  },
  {
    "name": "Venice Marco Polo",
    "code": "VCE",
    "tripUse": "Italy departure",
    "official": "https://www.veneziaairport.it/en/",
    "secondary": "https://www.veneziaairport.it/en/transport/transfers.html",
    "concern": "Early-morning hotel transfer",
    "action": "Finalize after hotel assignment",
    "status": "Pending hotel"
  },
  {
    "name": "New York JFK",
    "code": "JFK",
    "tripUse": "U.S. entry and terminal change",
    "official": "https://www.jfkairport.com/",
    "secondary": "https://www.jfkairport.com/to-from-airport/air-train",
    "concern": "Immigration, bags, AirTrain, TSA",
    "action": "Move continuously; no food until T4 security",
    "status": "Verify day-of"
  }
];

const MAP_HOTELS_VENUES = [
  {
    "city": "Rome",
    "name": "Anantara Palazzo Naiadi",
    "purpose": "Hotel / event base",
    "address": "Piazza della Repubblica 48-49, Rome",
    "link": "https://www.google.com/maps/search/?api=1&query=Anantara+Palazzo+Naiadi+Rome+Hotel",
    "access": "10–15 min walk from Termini",
    "note": "Event check-in and welcome dinner at hotel",
    "status": "Confirmed"
  },
  {
    "city": "Rome",
    "name": "SEEN by Olivier",
    "purpose": "Welcome dinner",
    "address": "Inside Anantara Palazzo Naiadi",
    "link": "https://www.google.com/maps/search/?api=1&query=SEEN+by+Olivier+Rome",
    "access": "In hotel",
    "note": "Oct. 5, 8:00 PM",
    "status": "Confirmed"
  },
  {
    "city": "Rome",
    "name": "Villa Miani",
    "purpose": "Awards dinner",
    "address": "",
    "link": "https://www.google.com/maps/search/?api=1&query=Villa+Miani+Rome",
    "access": "20–35 min by road from hotel",
    "note": "Use group coach; not practical by Metro",
    "status": "Confirmed / details pending"
  },
  {
    "city": "Florence",
    "name": "W Florence",
    "purpose": "Hotel / event base",
    "address": "Via del Melarancio 1, Florence",
    "link": "https://www.google.com/maps/search/?api=1&query=W+Florence",
    "access": "5–10 min walk from S.M.N.",
    "note": "Confirm breakfast and luggage storage",
    "status": "Confirmed"
  },
  {
    "city": "Florence",
    "name": "Giardino Corsini al Prato",
    "purpose": "Networking event",
    "address": "",
    "link": "https://www.google.com/maps/search/?api=1&query=Giardino+Corsini+al+Prato",
    "access": "15–20 min walk from W Florence",
    "note": "Follow group transport if provided",
    "status": "Confirmed / details pending"
  },
  {
    "city": "Venice",
    "name": "JW Marriott Venice Resort & Spa",
    "purpose": "Hotel / group base",
    "address": "Isola delle Rose, Laguna di San Marco, 30133 Venezia, Italy",
    "link": "https://www.google.com/maps/search/?api=1&query=JW+Marriott+Venice+Resort+Spa",
    "access": "Island resort; use confirmed JW/PSA shuttle or water transfer",
    "note": "Confirm shuttle schedule and central Venice pickup point",
    "status": "Confirmed / details pending"
  },
  {
    "city": "Venice",
    "name": "Hotel Antiche Figure",
    "purpose": "Personal hotel Oct. 13-15",
    "address": "Santa Croce 686, Fondamenta San Simeon Piccolo, 30135 Venezia, Italy",
    "link": "https://www.google.com/maps/search/?api=1&query=Hotel+Antiche+Figure+Venice",
    "access": "Across the Grand Canal from Venezia Santa Lucia; cross Scalzi Bridge, turn right, walk about 50 m",
    "note": "Confirmation PO55JT57ZW; check-in after 2:00 PM; checkout before 11:00 AM",
    "status": "Confirmed"
  },
  {
    "city": "Rome",
    "name": "U.S. Embassy Rome",
    "purpose": "Emergency / consular",
    "address": "Via Vittorio Veneto 121, Rome",
    "link": "https://www.google.com/maps/search/?api=1&query=US+Embassy+Rome",
    "access": "From Anantara: verify live route",
    "note": "Use only for consular emergencies",
    "status": "Reference"
  }
];

const MAP_OFFICIAL_SITES = [
  {
    "name": "TPA Parking",
    "area": "Tampa",
    "link": "https://www.tampaairport.com/parking",
    "use": "Economy Parking, rates, SunPass",
    "verify": "72 hours before",
    "note": "SkyConnect from Level 1"
  },
  {
    "name": "Delta",
    "area": "Flights",
    "link": "https://www.delta.com/",
    "use": "TPA-BOS and JFK-TPA",
    "verify": "24 hours before / travel day",
    "note": "Use app for gates"
  },
  {
    "name": "SAS",
    "area": "Flights",
    "link": "https://www.flysas.com/",
    "use": "BOS-CPH-FCO and VCE-CPH-JFK",
    "verify": "24 hours before / travel day",
    "note": "Use app for gate changes"
  },
  {
    "name": "Boston Logan / Massport",
    "area": "Boston",
    "link": "https://www.massport.com/logan-airport",
    "use": "Terminal transfer",
    "verify": "Travel day",
    "note": "Construction can alter route"
  },
  {
    "name": "Copenhagen Airport",
    "area": "Copenhagen",
    "link": "https://www.cph.dk/en",
    "use": "Connection and passport control",
    "verify": "Travel day",
    "note": "Use live gate screens"
  },
  {
    "name": "Trenitalia Leonardo Express",
    "area": "Rome",
    "link": "https://www.trenitalia.com/en/services/leonardo-express.html",
    "use": "FCO to Roma Termini",
    "verify": "72 hours before / arrival day",
    "note": "Official channels only"
  },
  {
    "name": "Italo",
    "area": "Italy rail",
    "link": "https://www.italotreno.com/en",
    "use": "Florence to Venice",
    "verify": "Day before / train day",
    "note": "Train 8904; 9:39 AM; ticket EM7VNB"
  },
  {
    "name": "ACTV / AVM Vaporetto",
    "area": "Venice",
    "link": "https://avm.avmspa.it/en/content/vaporetto",
    "use": "Venice public water transit",
    "verify": "After hotel assignment",
    "note": "Confirm stop and direction"
  },
  {
    "name": "Alilaguna",
    "area": "Venice airport water bus",
    "link": "https://www.alilaguna.it/en",
    "use": "Hotel to airport option",
    "verify": "After hotel assignment",
    "note": "Check first-morning service"
  },
  {
    "name": "Venice Marco Polo Airport",
    "area": "Venice",
    "link": "https://www.veneziaairport.it/en/transport/transfers.html",
    "use": "Airport transfer options",
    "verify": "72 hours before",
    "note": "Compare bus, Alilaguna, taxi"
  },
  {
    "name": "JFK AirTrain",
    "area": "New York",
    "link": "https://www.jfkairport.com/to-from-airport/air-train",
    "use": "Terminal 1 to Terminal 4",
    "verify": "Travel day",
    "note": "Do not exit toward Jamaica/Howard Beach"
  },
  {
    "name": "Hotel Antiche Figure",
    "area": "Venice hotel",
    "link": "https://www.hotelantichefigure.it/",
    "use": "Hotel details, directions and contact",
    "verify": "Before Oct. 13",
    "note": "+39 041 2759486 / info@hotelantichefigure.it"
  }
];

const MAP_SAVED_PENDING = [
  {
    "priority": "High",
    "item": "Rome-to-Florence group train",
    "link": "",
    "owner": "PSA / organizer",
    "due": "Before Oct. 8",
    "status": "Pending",
    "dependency": "Final group agenda",
    "note": "Need station, train, time, coach, seats, meeting point"
  },
  {
    "priority": "High",
    "item": "Hotel Antiche Figure map",
    "link": "https://www.google.com/maps/search/?api=1&query=Hotel+Antiche+Figure+Venice",
    "owner": "David",
    "due": "Complete",
    "status": "Done",
    "dependency": "Hotel confirmed",
    "note": "Across from Santa Lucia station; confirmation PO55JT57ZW."
  },
  {
    "priority": "High",
    "item": "Hotel Antiche Figure to VCE route",
    "link": "https://www.google.com/maps/dir/?api=1&origin=Hotel+Antiche+Figure+Venice&destination=Venice+Marco+Polo+Airport&travelmode=transit",
    "owner": "David",
    "due": "Oct. 14",
    "status": "Pending timetable",
    "dependency": "Official early-morning bus schedule",
    "note": "Primary route drafted; verify first departure and buy/stage tickets."
  },
  {
    "priority": "Medium",
    "item": "Flight seat map links",
    "link": "",
    "owner": "David",
    "due": "Before check-in",
    "status": "Pending",
    "dependency": "Seat assignments",
    "note": "Save airline seat maps/screenshots"
  },
  {
    "priority": "Medium",
    "item": "Awards dinner transport",
    "link": "",
    "owner": "PSA / organizer",
    "due": "Oct. 7",
    "status": "Pending",
    "dependency": "Coach details",
    "note": "Save pickup and return points"
  }
];
