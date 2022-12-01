var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send()
request.onload = function(){
    var data = request.response
    var result = JSON.parse(data)
    console.log(result);
        //  for(let i of result){
        //  console.log(i,i.currencies)
        // }
    
    //a. Get all the countries from the Asia continent /region using the Filter function
    var continent = result.filter((element)=> element.region == "Asia")
    var countries = continent.map((element) => element.name)
    console.log(countries)

    /* Output
    (52) ['Lebanon', 'Oman', 'Iran', 'Nepal', 'Kyrgyzstan', 'Cambodia', 'Hong Kong', 'Georgia', 'Kuwait', 'Sri Lanka', 'Singapore', 'Syria', 'Cocos (Keeling) Islands', 'Japan', 'Qatar', 'United Arab Emirates', 'North Korea', 'Palestine', 'Philippines', 'Afghanistan', 'Turkey', 'Jordan', 'Macau', 'Uzbekistan', 'Tajikistan', 'Taiwan', 'Iraq', 'British Indian Ocean Territory', 'Pakistan', 'Bangladesh', 'Malaysia', 'Mongolia', 'Indonesia', 'Laos', 'Bhutan', 'Saudi Arabia', 'Brunei', 'Kazakhstan', 'India', 'Azerbaijan', 'Turkmenistan', 'Israel', 'China', 'Armenia', 'South Korea', 'Vietnam', 'Christmas Island', 'Myanmar', 'Yemen', 'Thailand', 'Maldives', 'Bahrain']
    */

    //b. Get all the countries with a population of less than 2 lakhs using Filter function
    var res = result.filter((element)=> element.population<300000)
    var res1 = res.map((element)=> element.name)
    console.log(res1)
   
    /* Output
    (68) ['Saint Lucia', 'Svalbard and Jan Mayen', 'Anguilla', 'Kiribati', 'Tokelau', 'Antigua and Barbuda', 'Antarctica', 'Norfolk Island', 'Bouvet Island', 'Saint Pierre and Miquelon', 'Dominica', 'Gibraltar', 'Turks and Caicos Islands', 'Cook Islands', 'Barbados', 'American Samoa', 'Isle of Man', 'Sint Maarten', 'Cocos (Keeling) Islands', 'San Marino', 'Greenland', 'Niue', 'Jersey', 'Caribbean Netherlands', 'Palau', 'São Tomé and Príncipe', 'Guernsey', 'Saint Kitts and Nevis', 'Andorra', 'Faroe Islands', 'British Virgin Islands', 'British Indian Ocean Territory', 'French Guiana', 'Cayman Islands', 'Wallis and Futuna', 'Saint Barthélemy', 'Tonga', 'Åland Islands', 'Marshall Islands', 'Mayotte', 'United States Minor Outlying Islands', 'Falkland Islands', 'Nauru', 'Tuvalu', 'Curaçao', 'Guam', 'Montserrat', 'Bermuda', 'Vatican City', 'French Polynesia', 'Grenada', 'Seychelles', 'Aruba', 'French Southern and Antarctic Lands', 'South Georgia', 'Northern Mariana Islands', 'Monaco', 'Samoa', 'Liechtenstein', 'Christmas Island', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Martin', 'Pitcairn Islands', 'New Caledonia', 'Micronesia', 'Heard Island and McDonald Islands', 'United States Virgin Islands', 'Saint Vincent and the Grenadines']
    */
    
    //Print the following details name, capital, flag using forEach function
    var res2 = result.forEach((element)=>{console.log(`name : ${element.name}, capital : ${element.capital}, flag : ${element.flags}`)})

    /*
    name : Saint Lucia, capital : Castries, flag : https://flagcdn.com/lc.svg,https://flagcdn.com/w320/lc.png
script.js:31 name : Svalbard and Jan Mayen, capital : Longyearbyen, flag : https://flagcdn.com/sj.svg,https://flagcdn.com/w320/sj.png
script.js:31 name : Albania, capital : Tirana, flag : https://flagcdn.com/al.svg,https://flagcdn.com/w320/al.png
script.js:31 name : Anguilla, capital : The Valley, flag : https://flagcdn.com/ai.svg,https://flagcdn.com/w320/ai.png
script.js:31 name : Kiribati, capital : South Tarawa, flag : https://flagcdn.com/ki.svg,https://flagcdn.com/w320/ki.png
script.js:31 name : Mali, capital : Bamako, flag : https://flagcdn.com/ml.svg,https://flagcdn.com/w320/ml.png
script.js:31 name : Tokelau, capital : Fakaofo, flag : https://flagcdn.com/tk.svg,https://flagcdn.com/w320/tk.png
script.js:31 name : Antigua and Barbuda, capital : Saint John's, flag : https://flagcdn.com/ag.svg,https://flagcdn.com/w320/ag.png
script.js:31 name : Nigeria, capital : Abuja, flag : https://flagcdn.com/ng.svg,https://flagcdn.com/w320/ng.png
script.js:31 name : Dominican Republic, capital : Santo Domingo, flag : https://flagcdn.com/do.svg,https://flagcdn.com/w320/do.png
script.js:31 name : Ukraine, capital : Kyiv, flag : https://flagcdn.com/ua.svg,https://flagcdn.com/w320/ua.png
script.js:31 name : Antarctica, capital : undefined, flag : https://flagcdn.com/aq.svg,https://flagcdn.com/w320/aq.png
script.js:31 name : Norfolk Island, capital : Kingston, flag : https://flagcdn.com/nf.svg,https://flagcdn.com/w320/nf.png
script.js:31 name : Lebanon, capital : Beirut, flag : https://flagcdn.com/lb.svg,https://flagcdn.com/w320/lb.png
script.js:31 name : Guinea-Bissau, capital : Bissau, flag : https://flagcdn.com/gw.svg,https://flagcdn.com/w320/gw.png
script.js:31 name : Oman, capital : Muscat, flag : https://flagcdn.com/om.svg,https://flagcdn.com/w320/om.png
script.js:31 name : Cyprus, capital : Nicosia, flag : https://flagcdn.com/cy.svg,https://flagcdn.com/w320/cy.png
script.js:31 name : Western Sahara, capital : El Aaiún, flag : https://flagcdn.com/eh.svg,https://flagcdn.com/w320/eh.png
script.js:31 name : Bouvet Island, capital : undefined, flag : https://flagcdn.com/bv.svg,https://flagcdn.com/w320/bv.png
script.js:31 name : Moldova, capital : Chișinău, flag : https://flagcdn.com/md.svg,https://flagcdn.com/w320/md.png
script.js:31 name : Guyana, capital : Georgetown, flag : https://flagcdn.com/gy.svg,https://flagcdn.com/w320/gy.png
script.js:31 name : Hungary, capital : Budapest, flag : https://flagcdn.com/hu.svg,https://flagcdn.com/w320/hu.png
script.js:31 name : Iran, capital : Tehran, flag : https://flagcdn.com/ir.svg,https://flagcdn.com/w320/ir.png
script.js:31 name : Jamaica, capital : Kingston, flag : https://flagcdn.com/jm.svg,https://flagcdn.com/w320/jm.png
script.js:31 name : Republic of the Congo, capital : Brazzaville, flag : https://flagcdn.com/cg.svg,https://flagcdn.com/w320/cg.png
script.js:31 name : Saint Pierre and Miquelon, capital : Saint-Pierre, flag : https://flagcdn.com/pm.svg,https://flagcdn.com/w320/pm.png
script.js:31 name : Cape Verde, capital : Praia, flag : https://flagcdn.com/cv.svg,https://flagcdn.com/w320/cv.png
script.js:31 name : DR Congo, capital : Kinshasa, flag : https://flagcdn.com/cd.svg,https://flagcdn.com/w320/cd.png
script.js:31 name : El Salvador, capital : San Salvador, flag : https://flagcdn.com/sv.svg,https://flagcdn.com/w320/sv.png
script.js:31 name : Dominica, capital : Roseau, flag : https://flagcdn.com/dm.svg,https://flagcdn.com/w320/dm.png
script.js:31 name : Nepal, capital : Kathmandu, flag : https://flagcdn.com/np.svg,https://flagcdn.com/w320/np.png
script.js:31 name : Gibraltar, capital : Gibraltar, flag : https://flagcdn.com/gi.svg,https://flagcdn.com/w320/gi.png
script.js:31 name : Uganda, capital : Kampala, flag : https://flagcdn.com/ug.svg,https://flagcdn.com/w320/ug.png
script.js:31 name : Kyrgyzstan, capital : Bishkek, flag : https://flagcdn.com/kg.svg,https://flagcdn.com/w320/kg.png
script.js:31 name : Cambodia, capital : Phnom Penh, flag : https://flagcdn.com/kh.svg,https://flagcdn.com/w320/kh.png
script.js:31 name : Morocco, capital : Rabat, flag : https://flagcdn.com/ma.svg,https://flagcdn.com/w320/ma.png
script.js:31 name : Russia, capital : Moscow, flag : https://flagcdn.com/ru.svg,https://flagcdn.com/w320/ru.png
script.js:31 name : Lesotho, capital : Maseru, flag : https://flagcdn.com/ls.svg,https://flagcdn.com/w320/ls.png
script.js:31 name : Turks and Caicos Islands, capital : Cockburn Town, flag : https://flagcdn.com/tc.svg,https://flagcdn.com/w320/tc.png
script.js:31 name : South Africa, capital : Pretoria,Bloemfontein,Cape Town, flag : https://flagcdn.com/za.svg,https://flagcdn.com/w320/za.png
script.js:31 name : Fiji, capital : Suva, flag : https://flagcdn.com/fj.svg,https://flagcdn.com/w320/fj.png
script.js:31 name : Réunion, capital : Saint-Denis, flag : https://flagcdn.com/re.svg,https://flagcdn.com/w320/re.png
script.js:31 name : France, capital : Paris, flag : https://flagcdn.com/fr.svg,https://flagcdn.com/w320/fr.png
script.js:31 name : Latvia, capital : Riga, flag : https://flagcdn.com/lv.svg,https://flagcdn.com/w320/lv.png
script.js:31 name : Cook Islands, capital : Avarua, flag : https://flagcdn.com/ck.svg,https://flagcdn.com/w320/ck.png
script.js:31 name : Bosnia and Herzegovina, capital : Sarajevo, flag : https://flagcdn.com/ba.svg,https://flagcdn.com/w320/ba.png
script.js:31 name : Barbados, capital : Bridgetown, flag : https://flagcdn.com/bb.svg,https://flagcdn.com/w320/bb.png
script.js:31 name : Martinique, capital : Fort-de-France, flag : https://flagcdn.com/mq.svg,https://flagcdn.com/w320/mq.png
script.js:31 name : Madagascar, capital : Antananarivo, flag : https://flagcdn.com/mg.svg,https://flagcdn.com/w320/mg.png
script.js:31 name : Slovenia, capital : Ljubljana, flag : https://flagcdn.com/si.svg,https://flagcdn.com/w320/si.png
script.js:31 name : Kosovo, capital : Pristina, flag : https://flagcdn.com/xk.svg,https://flagcdn.com/w320/xk.png
script.js:31 name : Hong Kong, capital : City of Victoria, flag : https://flagcdn.com/hk.svg,https://flagcdn.com/w320/hk.png
script.js:31 name : Tunisia, capital : Tunis, flag : https://flagcdn.com/tn.svg,https://flagcdn.com/w320/tn.png
script.js:31 name : Denmark, capital : Copenhagen, flag : https://flagcdn.com/dk.svg,https://flagcdn.com/w320/dk.png
script.js:31 name : Georgia, capital : Tbilisi, flag : https://flagcdn.com/ge.svg,https://flagcdn.com/w320/ge.png
script.js:31 name : Kuwait, capital : Kuwait City, flag : https://flagcdn.com/kw.svg,https://flagcdn.com/w320/kw.png
script.js:31 name : American Samoa, capital : Pago Pago, flag : https://flagcdn.com/as.svg,https://flagcdn.com/w320/as.png
script.js:31 name : Liberia, capital : Monrovia, flag : https://flagcdn.com/lr.svg,https://flagcdn.com/w320/lr.png
script.js:31 name : Isle of Man, capital : Douglas, flag : https://flagcdn.com/im.svg,https://flagcdn.com/w320/im.png
script.js:31 name : Croatia, capital : Zagreb, flag : https://flagcdn.com/hr.svg,https://flagcdn.com/w320/hr.png
script.js:31 name : Uruguay, capital : Montevideo, flag : https://flagcdn.com/uy.svg,https://flagcdn.com/w320/uy.png
script.js:31 name : Tanzania, capital : Dodoma, flag : https://flagcdn.com/tz.svg,https://flagcdn.com/w320/tz.png
script.js:31 name : Sierra Leone, capital : Freetown, flag : https://flagcdn.com/sl.svg,https://flagcdn.com/w320/sl.png
script.js:31 name : Guinea, capital : Conakry, flag : https://flagcdn.com/gn.svg,https://flagcdn.com/w320/gn.png
script.js:31 name : Central African Republic, capital : Bangui, flag : https://flagcdn.com/cf.svg,https://flagcdn.com/w320/cf.png
script.js:31 name : Portugal, capital : Lisbon, flag : https://flagcdn.com/pt.svg,https://flagcdn.com/w320/pt.png
script.js:31 name : Sri Lanka, capital : Sri Jayawardenepura Kotte, flag : https://flagcdn.com/lk.svg,https://flagcdn.com/w320/lk.png
script.js:31 name : Sint Maarten, capital : Philipsburg, flag : https://flagcdn.com/sx.svg,https://flagcdn.com/w320/sx.png
script.js:31 name : Burundi, capital : Gitega, flag : https://flagcdn.com/bi.svg,https://flagcdn.com/w320/bi.png
script.js:31 name : Singapore, capital : Singapore, flag : https://flagcdn.com/sg.svg,https://flagcdn.com/w320/sg.png
script.js:31 name : Argentina, capital : Buenos Aires, flag : https://flagcdn.com/ar.svg,https://flagcdn.com/w320/ar.png
script.js:31 name : Syria, capital : Damascus, flag : https://flagcdn.com/sy.svg,https://flagcdn.com/w320/sy.png
script.js:31 name : Cocos (Keeling) Islands, capital : West Island, flag : https://flagcdn.com/cc.svg,https://flagcdn.com/w320/cc.png
script.js:31 name : San Marino, capital : City of San Marino, flag : https://flagcdn.com/sm.svg,https://flagcdn.com/w320/sm.png
script.js:31 name : Japan, capital : Tokyo, flag : https://flagcdn.com/jp.svg,https://flagcdn.com/w320/jp.png
script.js:31 name : Peru, capital : Lima, flag : https://flagcdn.com/pe.svg,https://flagcdn.com/w320/pe.png
script.js:31 name : Bolivia, capital : Sucre, flag : https://flagcdn.com/bo.svg,https://flagcdn.com/w320/bo.png
script.js:31 name : Papua New Guinea, capital : Port Moresby, flag : https://flagcdn.com/pg.svg,https://flagcdn.com/w320/pg.png
script.js:31 name : Belgium, capital : Brussels, flag : https://flagcdn.com/be.svg,https://flagcdn.com/w320/be.png
script.js:31 name : Qatar, capital : Doha, flag : https://flagcdn.com/qa.svg,https://flagcdn.com/w320/qa.png
script.js:31 name : United Arab Emirates, capital : Abu Dhabi, flag : https://flagcdn.com/ae.svg,https://flagcdn.com/w320/ae.png
script.js:31 name : North Korea, capital : Pyongyang, flag : https://flagcdn.com/kp.svg,https://flagcdn.com/w320/kp.png
script.js:31 name : Egypt, capital : Cairo, flag : https://flagcdn.com/eg.svg,https://flagcdn.com/w320/eg.png
script.js:31 name : Palestine, capital : Ramallah, flag : https://flagcdn.com/ps.svg,https://flagcdn.com/w320/ps.png
script.js:31 name : Greenland, capital : Nuuk, flag : https://flagcdn.com/gl.svg,https://flagcdn.com/w320/gl.png
script.js:31 name : Greece, capital : Athens, flag : https://flagcdn.com/gr.svg,https://flagcdn.com/w320/gr.png
script.js:31 name : Niue, capital : Alofi, flag : https://flagcdn.com/nu.svg,https://flagcdn.com/w320/nu.png
script.js:31 name : Colombia, capital : Bogotá, flag : https://flagcdn.com/co.svg,https://flagcdn.com/w320/co.png
script.js:31 name : Jersey, capital : Saint Helier, flag : https://flagcdn.com/je.svg,https://flagcdn.com/w320/je.png
script.js:31 name : Nicaragua, capital : Managua, flag : https://flagcdn.com/ni.svg,https://flagcdn.com/w320/ni.png
script.js:31 name : Estonia, capital : Tallinn, flag : https://flagcdn.com/ee.svg,https://flagcdn.com/w320/ee.png
script.js:31 name : Caribbean Netherlands, capital : Kralendijk, flag : https://flagcdn.com/bq.svg,https://flagcdn.com/w320/bq.png
script.js:31 name : Palau, capital : Ngerulmud, flag : https://flagcdn.com/pw.svg,https://flagcdn.com/w320/pw.png
script.js:31 name : São Tomé and Príncipe, capital : São Tomé, flag : https://flagcdn.com/st.svg,https://flagcdn.com/w320/st.png
script.js:31 name : Chile, capital : Santiago, flag : https://flagcdn.com/cl.svg,https://flagcdn.com/w320/cl.png
script.js:31 name : Philippines, capital : Manila, flag : https://flagcdn.com/ph.svg,https://flagcdn.com/w320/ph.png
script.js:31 name : Guernsey, capital : St. Peter Port, flag : https://flagcdn.com/gg.svg,https://flagcdn.com/w320/gg.png
script.js:31 name : Panama, capital : Panama City, flag : https://flagcdn.com/pa.svg,https://flagcdn.com/w320/pa.png
script.js:31 name : Czechia, capital : Prague, flag : https://flagcdn.com/cz.svg,https://flagcdn.com/w320/cz.png
script.js:31 name : Saint Kitts and Nevis, capital : Basseterre, flag : https://flagcdn.com/kn.svg,https://flagcdn.com/w320/kn.png
script.js:31 name : Mauritius, capital : Port Louis, flag : https://flagcdn.com/mu.svg,https://flagcdn.com/w320/mu.png
script.js:31 name : Chad, capital : N'Djamena, flag : https://flagcdn.com/td.svg,https://flagcdn.com/w320/td.png
script.js:31 name : Slovakia, capital : Bratislava, flag : https://flagcdn.com/sk.svg,https://flagcdn.com/w320/sk.png
script.js:31 name : Ethiopia, capital : Addis Ababa, flag : https://flagcdn.com/et.svg,https://flagcdn.com/w320/et.png
script.js:31 name : Afghanistan, capital : Kabul, flag : https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg,https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
script.js:31 name : Andorra, capital : Andorra la Vella, flag : https://flagcdn.com/ad.svg,https://flagcdn.com/w320/ad.png
script.js:31 name : Ecuador, capital : Quito, flag : https://flagcdn.com/ec.svg,https://flagcdn.com/w320/ec.png
script.js:31 name : United Kingdom, capital : London, flag : https://flagcdn.com/gb.svg,https://flagcdn.com/w320/gb.png
script.js:31 name : Angola, capital : Luanda, flag : https://flagcdn.com/ao.svg,https://flagcdn.com/w320/ao.png
script.js:31 name : Turkey, capital : Ankara, flag : https://flagcdn.com/tr.svg,https://flagcdn.com/w320/tr.png
script.js:31 name : Niger, capital : Niamey, flag : https://flagcdn.com/ne.svg,https://flagcdn.com/w320/ne.png
script.js:31 name : Burkina Faso, capital : Ouagadougou, flag : https://flagcdn.com/bf.svg,https://flagcdn.com/w320/bf.png
script.js:31 name : Jordan, capital : Amman, flag : https://flagcdn.com/jo.svg,https://flagcdn.com/w320/jo.png
script.js:31 name : Faroe Islands, capital : Tórshavn, flag : https://flagcdn.com/fo.svg,https://flagcdn.com/w320/fo.png
script.js:31 name : Macau, capital : undefined, flag : https://flagcdn.com/mo.svg,https://flagcdn.com/w320/mo.png
script.js:31 name : Bulgaria, capital : Sofia, flag : https://flagcdn.com/bg.svg,https://flagcdn.com/w320/bg.png
script.js:31 name : Uzbekistan, capital : Tashkent, flag : https://flagcdn.com/uz.svg,https://flagcdn.com/w320/uz.png
script.js:31 name : Paraguay, capital : Asunción, flag : https://flagcdn.com/py.svg,https://flagcdn.com/w320/py.png
script.js:31 name : British Virgin Islands, capital : Road Town, flag : https://flagcdn.com/vg.svg,https://flagcdn.com/w320/vg.png
script.js:31 name : Tajikistan, capital : Dushanbe, flag : https://flagcdn.com/tj.svg,https://flagcdn.com/w320/tj.png
script.js:31 name : Taiwan, capital : Taipei, flag : https://flagcdn.com/tw.svg,https://flagcdn.com/w320/tw.png
script.js:31 name : Belize, capital : Belmopan, flag : https://flagcdn.com/bz.svg,https://flagcdn.com/w320/bz.png
script.js:31 name : Iraq, capital : Baghdad, flag : https://flagcdn.com/iq.svg,https://flagcdn.com/w320/iq.png
script.js:31 name : Italy, capital : Rome, flag : https://flagcdn.com/it.svg,https://flagcdn.com/w320/it.png
script.js:31 name : British Indian Ocean Territory, capital : Diego Garcia, flag : https://flagcdn.com/io.svg,https://flagcdn.com/w320/io.png
script.js:31 name : Ireland, capital : Dublin, flag : https://flagcdn.com/ie.svg,https://flagcdn.com/w320/ie.png
script.js:31 name : Namibia, capital : Windhoek, flag : https://flagcdn.com/na.svg,https://flagcdn.com/w320/na.png
script.js:31 name : Cameroon, capital : Yaoundé, flag : https://flagcdn.com/cm.svg,https://flagcdn.com/w320/cm.png
script.js:31 name : Comoros, capital : Moroni, flag : https://flagcdn.com/km.svg,https://flagcdn.com/w320/km.png
script.js:31 name : Austria, capital : Vienna, flag : https://flagcdn.com/at.svg,https://flagcdn.com/w320/at.png
script.js:31 name : Gambia, capital : Banjul, flag : https://flagcdn.com/gm.svg,https://flagcdn.com/w320/gm.png
script.js:31 name : Malta, capital : Valletta, flag : https://flagcdn.com/mt.svg,https://flagcdn.com/w320/mt.png
script.js:31 name : Germany, capital : Berlin, flag : https://flagcdn.com/de.svg,https://flagcdn.com/w320/de.png
script.js:31 name : Brazil, capital : Brasília, flag : https://flagcdn.com/br.svg,https://flagcdn.com/w320/br.png
script.js:31 name : Botswana, capital : Gaborone, flag : https://flagcdn.com/bw.svg,https://flagcdn.com/w320/bw.png
script.js:31 name : Pakistan, capital : Islamabad, flag : https://flagcdn.com/pk.svg,https://flagcdn.com/w320/pk.png
script.js:31 name : French Guiana, capital : Cayenne, flag : https://flagcdn.com/gf.svg,https://flagcdn.com/w320/gf.png
script.js:31 name : Bangladesh, capital : Dhaka, flag : https://flagcdn.com/bd.svg,https://flagcdn.com/w320/bd.png
script.js:31 name : Cayman Islands, capital : George Town, flag : https://flagcdn.com/ky.svg,https://flagcdn.com/w320/ky.png
script.js:31 name : Malaysia, capital : Kuala Lumpur, flag : https://flagcdn.com/my.svg,https://flagcdn.com/w320/my.png
script.js:31 name : Trinidad and Tobago, capital : Port of Spain, flag : https://flagcdn.com/tt.svg,https://flagcdn.com/w320/tt.png
script.js:31 name : Wallis and Futuna, capital : Mata-Utu, flag : https://flagcdn.com/wf.svg,https://flagcdn.com/w320/wf.png
script.js:31 name : Finland, capital : Helsinki, flag : https://flagcdn.com/fi.svg,https://flagcdn.com/w320/fi.png
script.js:31 name : Mauritania, capital : Nouakchott, flag : https://flagcdn.com/mr.svg,https://flagcdn.com/w320/mr.png
script.js:31 name : Saint Barthélemy, capital : Gustavia, flag : https://flagcdn.com/bl.svg,https://flagcdn.com/w320/bl.png
script.js:31 name : Gabon, capital : Libreville, flag : https://flagcdn.com/ga.svg,https://flagcdn.com/w320/ga.png
script.js:31 name : Haiti, capital : Port-au-Prince, flag : https://flagcdn.com/ht.svg,https://flagcdn.com/w320/ht.png
script.js:31 name : Tonga, capital : Nuku'alofa, flag : https://flagcdn.com/to.svg,https://flagcdn.com/w320/to.png
script.js:31 name : Åland Islands, capital : Mariehamn, flag : https://flagcdn.com/ax.svg,https://flagcdn.com/w320/ax.png
script.js:31 name : Marshall Islands, capital : Majuro, flag : https://flagcdn.com/mh.svg,https://flagcdn.com/w320/mh.png
script.js:31 name : Somalia, capital : Mogadishu, flag : https://flagcdn.com/so.svg,https://flagcdn.com/w320/so.png
script.js:31 name : Timor-Leste, capital : Dili, flag : https://flagcdn.com/tl.svg,https://flagcdn.com/w320/tl.png
script.js:31 name : Australia, capital : Canberra, flag : https://flagcdn.com/au.svg,https://flagcdn.com/w320/au.png
script.js:31 name : Mayotte, capital : Mamoudzou, flag : https://flagcdn.com/yt.svg,https://flagcdn.com/w320/yt.png
script.js:31 name : Equatorial Guinea, capital : Malabo, flag : https://flagcdn.com/gq.svg,https://flagcdn.com/w320/gq.png
script.js:31 name : Romania, capital : Bucharest, flag : https://flagcdn.com/ro.svg,https://flagcdn.com/w320/ro.png
script.js:31 name : Mongolia, capital : Ulan Bator, flag : https://flagcdn.com/mn.svg,https://flagcdn.com/w320/mn.png
script.js:31 name : Indonesia, capital : Jakarta, flag : https://flagcdn.com/id.svg,https://flagcdn.com/w320/id.png
script.js:31 name : Netherlands, capital : Amsterdam, flag : https://flagcdn.com/nl.svg,https://flagcdn.com/w320/nl.png
script.js:31 name : United States Minor Outlying Islands, capital : undefined, flag : https://flagcdn.com/um.svg,https://flagcdn.com/w320/um.png
script.js:31 name : Belarus, capital : Minsk, flag : https://flagcdn.com/by.svg,https://flagcdn.com/w320/by.png
script.js:31 name : Djibouti, capital : Djibouti, flag : https://flagcdn.com/dj.svg,https://flagcdn.com/w320/dj.png
script.js:31 name : Iceland, capital : Reykjavik, flag : https://flagcdn.com/is.svg,https://flagcdn.com/w320/is.png
script.js:31 name : Falkland Islands, capital : Stanley, flag : https://flagcdn.com/fk.svg,https://flagcdn.com/w320/fk.png
script.js:31 name : Vanuatu, capital : Port Vila, flag : https://flagcdn.com/vu.svg,https://flagcdn.com/w320/vu.png
script.js:31 name : Laos, capital : Vientiane, flag : https://flagcdn.com/la.svg,https://flagcdn.com/w320/la.png
script.js:31 name : Zimbabwe, capital : Harare, flag : https://flagcdn.com/zw.svg,https://flagcdn.com/w320/zw.png
script.js:31 name : Bhutan, capital : Thimphu, flag : https://flagcdn.com/bt.svg,https://flagcdn.com/w320/bt.png
script.js:31 name : Ghana, capital : Accra, flag : https://flagcdn.com/gh.svg,https://flagcdn.com/w320/gh.png
script.js:31 name : Puerto Rico, capital : San Juan, flag : https://flagcdn.com/pr.svg,https://flagcdn.com/w320/pr.png
script.js:31 name : Luxembourg, capital : Luxembourg, flag : https://flagcdn.com/lu.svg,https://flagcdn.com/w320/lu.png
script.js:31 name : Saudi Arabia, capital : Riyadh, flag : https://flagcdn.com/sa.svg,https://flagcdn.com/w320/sa.png
script.js:31 name : Nauru, capital : Yaren, flag : https://flagcdn.com/nr.svg,https://flagcdn.com/w320/nr.png
script.js:31 name : Serbia, capital : Belgrade, flag : https://flagcdn.com/rs.svg,https://flagcdn.com/w320/rs.png
script.js:31 name : Norway, capital : Oslo, flag : https://flagcdn.com/no.svg,https://flagcdn.com/w320/no.png
script.js:31 name : Tuvalu, capital : Funafuti, flag : https://flagcdn.com/tv.svg,https://flagcdn.com/w320/tv.png
script.js:31 name : Curaçao, capital : Willemstad, flag : https://flagcdn.com/cw.svg,https://flagcdn.com/w320/cw.png
script.js:31 name : Guam, capital : Hagåtña, flag : https://flagcdn.com/gu.svg,https://flagcdn.com/w320/gu.png
script.js:31 name : Libya, capital : Tripoli, flag : https://flagcdn.com/ly.svg,https://flagcdn.com/w320/ly.png
script.js:31 name : Switzerland, capital : Bern, flag : https://flagcdn.com/ch.svg,https://flagcdn.com/w320/ch.png
script.js:31 name : Brunei, capital : Bandar Seri Begawan, flag : https://flagcdn.com/bn.svg,https://flagcdn.com/w320/bn.png
script.js:31 name : Montserrat, capital : Plymouth, flag : https://flagcdn.com/ms.svg,https://flagcdn.com/w320/ms.png
script.js:31 name : Canada, capital : Ottawa, flag : https://flagcdn.com/ca.svg,https://flagcdn.com/w320/ca.png
script.js:31 name : Eswatini, capital : Mbabane, flag : https://flagcdn.com/sz.svg,https://flagcdn.com/w320/sz.png
script.js:31 name : Eritrea, capital : Asmara, flag : https://flagcdn.com/er.svg,https://flagcdn.com/w320/er.png
script.js:31 name : Suriname, capital : Paramaribo, flag : https://flagcdn.com/sr.svg,https://flagcdn.com/w320/sr.png
script.js:31 name : Guatemala, capital : Guatemala City, flag : https://flagcdn.com/gt.svg,https://flagcdn.com/w320/gt.png
script.js:31 name : Bermuda, capital : Hamilton, flag : https://flagcdn.com/bm.svg,https://flagcdn.com/w320/bm.png
script.js:31 name : Kazakhstan, capital : Nur-Sultan, flag : https://flagcdn.com/kz.svg,https://flagcdn.com/w320/kz.png
script.js:31 name : Vatican City, capital : Vatican City, flag : https://flagcdn.com/va.svg,https://flagcdn.com/w320/va.png
script.js:31 name : Costa Rica, capital : San José, flag : https://flagcdn.com/cr.svg,https://flagcdn.com/w320/cr.png
script.js:31 name : French Polynesia, capital : Papeetē, flag : https://flagcdn.com/pf.svg,https://flagcdn.com/w320/pf.png
script.js:31 name : Grenada, capital : St. George's, flag : https://flagcdn.com/gd.svg,https://flagcdn.com/w320/gd.png
script.js:31 name : Solomon Islands, capital : Honiara, flag : https://flagcdn.com/sb.svg,https://flagcdn.com/w320/sb.png
script.js:31 name : Malawi, capital : Lilongwe, flag : https://flagcdn.com/mw.svg,https://flagcdn.com/w320/mw.png
script.js:31 name : Sudan, capital : Khartoum, flag : https://flagcdn.com/sd.svg,https://flagcdn.com/w320/sd.png
script.js:31 name : Montenegro, capital : Podgorica, flag : https://flagcdn.com/me.svg,https://flagcdn.com/w320/me.png
script.js:31 name : India, capital : New Delhi, flag : https://flagcdn.com/in.svg,https://flagcdn.com/w320/in.png
script.js:31 name : Poland, capital : Warsaw, flag : https://flagcdn.com/pl.svg,https://flagcdn.com/w320/pl.png
script.js:31 name : South Sudan, capital : Juba, flag : https://flagcdn.com/ss.svg,https://flagcdn.com/w320/ss.png
script.js:31 name : Togo, capital : Lomé, flag : https://flagcdn.com/tg.svg,https://flagcdn.com/w320/tg.png
script.js:31 name : Zambia, capital : Lusaka, flag : https://flagcdn.com/zm.svg,https://flagcdn.com/w320/zm.png
script.js:31 name : Kenya, capital : Nairobi, flag : https://flagcdn.com/ke.svg,https://flagcdn.com/w320/ke.png
script.js:31 name : Sweden, capital : Stockholm, flag : https://flagcdn.com/se.svg,https://flagcdn.com/w320/se.png
script.js:31 name : Azerbaijan, capital : Baku, flag : https://flagcdn.com/az.svg,https://flagcdn.com/w320/az.png
script.js:31 name : Benin, capital : Porto-Novo, flag : https://flagcdn.com/bj.svg,https://flagcdn.com/w320/bj.png
script.js:31 name : Seychelles, capital : Victoria, flag : https://flagcdn.com/sc.svg,https://flagcdn.com/w320/sc.png
script.js:31 name : Turkmenistan, capital : Ashgabat, flag : https://flagcdn.com/tm.svg,https://flagcdn.com/w320/tm.png
script.js:31 name : Cuba, capital : Havana, flag : https://flagcdn.com/cu.svg,https://flagcdn.com/w320/cu.png
script.js:31 name : Aruba, capital : Oranjestad, flag : https://flagcdn.com/aw.svg,https://flagcdn.com/w320/aw.png
script.js:31 name : Senegal, capital : Dakar, flag : https://flagcdn.com/sn.svg,https://flagcdn.com/w320/sn.png
script.js:31 name : Algeria, capital : Algiers, flag : https://flagcdn.com/dz.svg,https://flagcdn.com/w320/dz.png
script.js:31 name : Honduras, capital : Tegucigalpa, flag : https://flagcdn.com/hn.svg,https://flagcdn.com/w320/hn.png
script.js:31 name : United States, capital : Washington, D.C., flag : https://flagcdn.com/us.svg,https://flagcdn.com/w320/us.png
script.js:31 name : Israel, capital : Jerusalem, flag : https://flagcdn.com/il.svg,https://flagcdn.com/w320/il.png
script.js:31 name : French Southern and Antarctic Lands, capital : Port-aux-Français, flag : https://flagcdn.com/tf.svg,https://flagcdn.com/w320/tf.png
script.js:31 name : Mozambique, capital : Maputo, flag : https://flagcdn.com/mz.svg,https://flagcdn.com/w320/mz.png
script.js:31 name : South Georgia, capital : King Edward Point, flag : https://flagcdn.com/gs.svg,https://flagcdn.com/w320/gs.png
script.js:31 name : Bahamas, capital : Nassau, flag : https://flagcdn.com/bs.svg,https://flagcdn.com/w320/bs.png
script.js:31 name : Venezuela, capital : Caracas, flag : https://flagcdn.com/ve.svg,https://flagcdn.com/w320/ve.png
script.js:31 name : China, capital : Beijing, flag : https://flagcdn.com/cn.svg,https://flagcdn.com/w320/cn.png
script.js:31 name : Armenia, capital : Yerevan, flag : https://flagcdn.com/am.svg,https://flagcdn.com/w320/am.png
script.js:31 name : Northern Mariana Islands, capital : Saipan, flag : https://flagcdn.com/mp.svg,https://flagcdn.com/w320/mp.png
script.js:31 name : South Korea, capital : Seoul, flag : https://flagcdn.com/kr.svg,https://flagcdn.com/w320/kr.png
script.js:31 name : Monaco, capital : Monaco, flag : https://flagcdn.com/mc.svg,https://flagcdn.com/w320/mc.png
script.js:31 name : Vietnam, capital : Hanoi, flag : https://flagcdn.com/vn.svg,https://flagcdn.com/w320/vn.png
script.js:31 name : Samoa, capital : Apia, flag : https://flagcdn.com/ws.svg,https://flagcdn.com/w320/ws.png
script.js:31 name : Liechtenstein, capital : Vaduz, flag : https://flagcdn.com/li.svg,https://flagcdn.com/w320/li.png
script.js:31 name : Mexico, capital : Mexico City, flag : https://flagcdn.com/mx.svg,https://flagcdn.com/w320/mx.png
script.js:31 name : North Macedonia, capital : Skopje, flag : https://flagcdn.com/mk.svg,https://flagcdn.com/w320/mk.png
script.js:31 name : Christmas Island, capital : Flying Fish Cove, flag : https://flagcdn.com/cx.svg,https://flagcdn.com/w320/cx.png
script.js:31 name : Saint Helena, Ascension and Tristan da Cunha, capital : Jamestown, flag : https://flagcdn.com/sh.svg,https://flagcdn.com/w320/sh.png
script.js:31 name : Saint Martin, capital : Marigot, flag : https://flagcdn.com/mf.svg,https://flagcdn.com/w320/mf.png
script.js:31 name : Myanmar, capital : Naypyidaw, flag : https://flagcdn.com/mm.svg,https://flagcdn.com/w320/mm.png
script.js:31 name : Yemen, capital : Sana'a, flag : https://flagcdn.com/ye.svg,https://flagcdn.com/w320/ye.png
script.js:31 name : Pitcairn Islands, capital : Adamstown, flag : https://flagcdn.com/pn.svg,https://flagcdn.com/w320/pn.png
script.js:31 name : Guadeloupe, capital : Basse-Terre, flag : https://flagcdn.com/gp.svg,https://flagcdn.com/w320/gp.png
script.js:31 name : Ivory Coast, capital : Yamoussoukro, flag : https://flagcdn.com/ci.svg,https://flagcdn.com/w320/ci.png
script.js:31 name : New Caledonia, capital : Nouméa, flag : https://flagcdn.com/nc.svg,https://flagcdn.com/w320/nc.png
script.js:31 name : Micronesia, capital : Palikir, flag : https://flagcdn.com/fm.svg,https://flagcdn.com/w320/fm.png
script.js:31 name : Rwanda, capital : Kigali, flag : https://flagcdn.com/rw.svg,https://flagcdn.com/w320/rw.png
script.js:31 name : Thailand, capital : Bangkok, flag : https://flagcdn.com/th.svg,https://flagcdn.com/w320/th.png
script.js:31 name : New Zealand, capital : Wellington, flag : https://flagcdn.com/nz.svg,https://flagcdn.com/w320/nz.png
script.js:31 name : Spain, capital : Madrid, flag : https://flagcdn.com/es.svg,https://flagcdn.com/w320/es.png
script.js:31 name : Lithuania, capital : Vilnius, flag : https://flagcdn.com/lt.svg,https://flagcdn.com/w320/lt.png
script.js:31 name : Heard Island and McDonald Islands, capital : undefined, flag : https://flagcdn.com/hm.svg,https://flagcdn.com/w320/hm.png
script.js:31 name : Maldives, capital : Malé, flag : https://flagcdn.com/mv.svg,https://flagcdn.com/w320/mv.png
script.js:31 name : Bahrain, capital : Manama, flag : https://flagcdn.com/bh.svg,https://flagcdn.com/w320/bh.png
script.js:31 name : United States Virgin Islands, capital : Charlotte Amalie, flag : https://flagcdn.com/vi.svg,https://flagcdn.com/w320/vi.png
script.js:31 name : Saint Vincent and the Grenadines, capital : Kingstown, flag : https://flagcdn.com/vc.svg,https://flagcdn.com/w320/vc.png
*/

// d. Print the total population of countries using reduce function
var total_population = result.reduce((acc,cv)=> acc+cv.population,0)
console.log(`Total Population is : ${total_population}`)


// Output : Total Population is : 7842779650

// e. Print the country which uses US Dollars as currency.
var currency = result.map((element)=> {
    for(let i in element.currencies){
        if(element.currencies[i].code === "USD"){
            console.log(element.name)
        }
    }
}
)
/* Output
American Samoa
script.js:297 Bonaire, Sint Eustatius and Saba
script.js:297 British Indian Ocean Territory
script.js:297 Virgin Islands (British)
script.js:297 Virgin Islands (U.S.)
script.js:297 Cambodia
script.js:297 Ecuador
script.js:297 El Salvador
script.js:297 Guam
script.js:297 Marshall Islands
script.js:297 Micronesia (Federated States of)
script.js:297 Northern Mariana Islands
script.js:297 Palau
script.js:297 Panama
script.js:297 Puerto Rico
script.js:297 Timor-Leste
script.js:297 Turks and Caicos Islands
script.js:297 United States of America
*/
}