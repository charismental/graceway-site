<template>
  <div class="program-schedule">
    <v-container>
      <v-row dense>
        <v-col
        v-for='s in speakers'
        :key='s.name'
        :cols="$vuetify.breakpoint.xs ? '12' : '6'"
        >
        <v-card outlined>
          <v-row justify="space-between">
            <v-col align-self='start' cols='3'>
              <v-avatar tile size='100' :class='$vuetify.breakpoint.xs ? "ma-1" : "pa-4"'>
                <v-img :src="require('@/assets/' + s.photo)" cover></v-img>
              </v-avatar>
            </v-col>
            <v-col align-self='end'>
              <v-list-item class='ml-auto'>
                <v-list-item-content>
                  <v-list-item-title title>
                    {{s.name}}
                  </v-list-item-title>
                  <v-list-item-subtitle
                  :style="$vuetify.breakpoint.xs ? 'font-size:0.8rem;' : ''">
                  <!-- TIMES NEEDS TO BE SPLIT AND WRAPPED IN FLEXBOX -->
                    {{s.times}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'ProgramSchedule',
  data: () => ({
    speakers: [
      {
        name: 'Alistair Begg',
        photo: 'alistair_begg.jpg',
        times: 'Weekdays @ 1:00AM/PM',
        about: `<p><span>Alistair Begg has been in pastoral ministry since 1975.
        Following graduation from The London School of Theology, he served eight years
        in Scotland at both Charlotte Chapel in Edinburgh and Hamilton Baptist Church.
        </span></span></p>
        <p><span >In 1983,he becamethe senior pastor at Parkside Church near
        Cleveland, Ohio. He has written several books and is heard daily and
        weekly on the radio program,<i >Truth For Life</i>. The teaching on<i >Truth
        For Life</i>stems from the week by week Bible teaching at Parkside
        Church.</span></p><p><span >On February 27,
        1995, Truth For Life began airing its 25-minute daily program on seven radio
        stations. Today, Truth For Life can now be heard in every major radio market
        across the U.S., and also in select Canadian markets, through 1,655 radio
        outlets.</span></p><p><span >The unique,
        expositional teaching of Alistair Begg is now internationally known as an
        inspiring source for clear, relevant instruction rooted firmly in the
        Scripture. Studying God’s Word each day, verse by verse, is the hallmark of
        this ministry.</span></p><p><span >Passionate
        about seeing unbelievers converted, believers established, and local churches
        strengthened, Truth For Life faithfully looks to God to proclaim His Truth
        through the program and to transform the lives of those who listen through His
        Spirit.</span></p><p><span >In 2009, driven
        by the desire to share the good news of the Gospel without cost as a barrier,
        the ministry made the entire Truth For Life teaching archive free for download
        at truthforlife.org. Since then, over 55 million messages have been downloaded.</span></p>
        <p><span >Because of this
        encouraging response, Truth For Life made all of its CDs, DVDs, and books by
        Alistair Begg and other featured authors available at cost—with no markup—in
        2011 and now routinely distributes over 10,000 resources each month.</span></p>
        <p><span >In addition,
        people all around the world can now access the teaching of Alistair Begg
        through two convenient mobile apps, on podcast, and even streaming television.
        Truth For Life also connects with listeners at live ministry events and
        conferences across the US and Canada in cities where the radio program is
        heard.</span></p><p><span >Led by Alistair
        Begg and overseen by an independent, volunteer board of trustees, Truth For
        Life is a Bible-teaching ministry seeking to faithfully proclaim the Word of
        God and is committed to highest level of financial stewardship. Over 95% of
        donated funds go directly to ministry expenses.</span></p>`,
      },
      {
        name: 'David Pawson',
        photo: 'david_pawson.png',
        times: 'Mon, Wed, Fri @ 2:30AM/PM',
        about: `<p><span>A
        speaker cum author with uncompromising faithfulness to the Holy Scriptures,
        David brings clarity and a message of urgency to Christians to uncover hidden
        treasures in God’s Word.</span></p><p><span >Born
        in England in 1930, David began his career with a degree in Agriculture from
        Durham University. When God intervened and called him to become a Minister, he
        completed an MA in Theology at Cambridge University and served as a Chaplain in
        the Royal Air Force for 3 years. He moved on to pastor several churches
        including the Millmead Centre in Guildford which became a model for many UK
        church leaders. In 1979, the Lord led him into an international ministry. His
        current itinerant ministry is predominantly to church leaders. Over the years,
        he has written many books, booklets, and daily reading notes. His extensive and
        very accessible overviews of the books of the Bible have been published and
        recorded in ‘Unlocking the Bible’. Millions of copies of his teachings have
        been distributed in more than 120 countries, providing a solid biblical
        foundation.</span></p><p><span >David
        is considered to be one of the world’s finest biblical expositors. Translations
        of David’s teachings continue to grow with extensive projects currently focused
        in countries including Brazil, Germany, Czech Republic, Hungary, China and
        Indonesia, just to name a few.</span></p><p><span >David
        was passionate about teaching the Bible and believed every teacher has a
        responsibility to expound the truth and expose error. He encourages everyone to
        read the Bible for themselves, not verse by verse but to read each verse in the
        context in which they were written. Too many people misquote Bible verses by
        taking them out of context. David teaches that a ‘text out of context becomes a
        pretext’ to a whole new and wrong meaning to that for which the verse was
        written.</span></p><p><span >Best
        known for his series Unlocking the Bible, David taught that the Bible Is not
        one book but a library of books. Each book is different, written by many
        different writers. To understand each book of the Bible you need understand
        firstly ‘Who’ wrote the book, and secondly ‘Why’ the book was written. In this
        series David gives us the keys to unlock the Bible for ourselves.</span></p>
        <p><span >He was an advocate that the solution to every situation in life can be found by
        reading the scriptures.</span></p>
        <p><span>David Passedaway in 2020. His ministry continues.</span></p>`,
      },
      {
        name: 'John Casteel',
        photo: 'john_casteel.jpg',
        times: 'Mon, Wed, Fri - 6:30AM, 7:00PM',
      },
      {
        name: 'Paul Washer',
        photo: 'paul_washer.jpg',
        times: 'Mon, Wed, Fri - 8:30AM, 9:00PM',
        about: `<p>Paul Washer became a believer while
        studying at the University of Texas. He completed his undergraduate studies and
        enrolled at Southwestern Theological Seminary, where he received his Master of
        Divinity degree. After graduating, he moved to Peru and served there as a
        missionary for ten years, during which time he founded the HeartCry Missionary
        Society to support Peruvian church planters. HeartCry's work now supports
        indigenous missionaries throughout Africa, Asia, Europe, the Middle East,
        Eurasia, and Latin America.</p><p><span>Anyone
        unfamiliar with the burden of Paul Washer's ministry should become so. Any
        believer already familiar with his ministry will know why we say that and will
        likely agree. If we could&nbsp;sum up Paul's ministry in a few words&nbsp;they
        would be as follows:</span></p><p><span>Paul Washer has been used of God in
        our time for a widespread recovery of&nbsp;</span><em><span>(1)</span></em><span>&nbsp;the true Gospel and
        a biblical basis for Christian assurance,&nbsp;</span><em><span>(2)&nbsp;</span></em><span>an evangelistic
        approach and presentation that maintains biblical integrity, and&nbsp;</span><em><span>
        (3)&nbsp;</span></em><span>the importance of
        practical holiness in all of life and especially in the home.</span></p>
        <p><span>Paul believes – “</span><span>We glorify God
        more by demonstrating to people all that the Lord has done for us, instead of
        demonstrating to everyone what we’ve done for the Lord.</span>”</span></p>
        <p>Paul now serves as one of the
        laborers with the HeartCry Missionary Society. He and his wife Charo have three
        children: Ian, Evan, and Rowan.</p>`,
      },
      {
        name: 'Chuck Missler',
        photo: 'chuch_missler.jpg',
        times: 'Weekdays - 10:30AM, 11:00PM',
        about: `<p>As a child, he developed an intense
        interest in the Bible; studying it became a favorite pastime. In the 1970s,
        while still in the corporate world, Chuck began leading weekly Bible studies at
        the 30,000-member Calvary Chapel Costa Mesa, in California where thousands of
        cassette tapes were distributed each month. At which time he was one of the
        founding members of the Biblical Research Center. In 1973 He and Nancy
        established&nbsp;<span>Koinonia House</span>.</p>
        <p>Chuck had enjoyed a longtime, personal relationship with Hal
        Lindsey, who upon hearing of Chuck’s professional misfortune, encouraged him
        that he could be an independent author and speaker. Over the years, Chuck had
        developed a loyal following. (Through Doug Wetmore, head of the tape ministry
        of Firefighters for Christ, Chuck learned that over 7 million copies of his
        taped Bible studies were scattered throughout the world.)&nbsp;<span>Koinonia
        House</span>&nbsp;then became Chuck’s full-time profession. Chuck also helped
        start BlueLetterBible.org and AudioCentral.com. AudioCentral.com would later be
        purchased by OnePlace.com, part of the Salem Radio Network.</p>
        <p>After a devastating&nbsp;<span>Earthquake</span>&nbsp;in
        1992 demolished their home in Big Bear, California, Chuck, and Nan moved
        Koinonia House to Coeur d'Alene, Idaho.</p>
        <p>On the topic of radio, Chuck's thirty-minute 66/40 radio
        program airs on more than 3,000 radio stations worldwide and is one of the only
        ad-free teaching segments on Christian radio.</p>
        <p>Chuck is a prominent speaker about bible prophecy. Chuck has
        numerous programs aired on the Christian television stations like GOD TV,
        RevelationTV, and TBN Europe, namely his biblical studies&nbsp;<em>
        <span>Learn the Bible in 24 Hours</span></em>,&nbsp;<em><span>The Book of Revelation</span>
        </em>,&nbsp;<em><span>The Book of Genesis</span></em>, and&nbsp;<em><span>The Book of Daniel,
        </span></em>&nbsp;as well as his topical
        studies&nbsp;<em><span>Return of the Nephilim</span></em>&nbsp;and
        his&nbsp;<em><span>Angels</span></em>&nbsp;series.</p>
        <p><span>In May 2018, Chuck&nbsp;passed away peacefully at his home in
        Reporoa, New Zealand. He was preceded in death by his wife Nancy and his two
        sons, Charles “Chip” and Mark. He is survived by two daughters, Lisa Bright and
        Meshell Missler, and eight grandchildren.</span></span></p>`,
      },
      {
        name: 'Curtis Dougherty',
        photo: 'curtis_dougherty.jpg',
        times: 'Mon, Wed, Fri @ 4:30AM/PM',
      },
      {
        name: 'Ern Baxter',
        photo: 'ern_baxter.jpg',
        times: 'Tues, Thur @ 2:30AM/PM',
        about: `<p>Ern Baxter (1914-1993) is
        remembered as one of the greatest Christian preachers of the 20th Century, and
        he served the Lord for more than 60 years as evangelist, teacher, worship
        leader, and prophetic teacher. William John Ernest Baxter was born on the prairies
        of western Canada in Saskatchewan. Though he did not complete High School, he
        was a voracious collector and reader of books, and traveled worldwide in
        ministry. He became an orator without parallel.</p>
        <p >After experiencing a life-changing miraculous healing,
        Brother Ern testified of being filled with the Holy Spirit and began to preach
        across Canada. In the 1940s, he was the Bible teacher for the William Branham
        Crusades, which often reached crowds in the tens of thousands, up to 100,000 at
        a time. However, Brother Ern’s strong respect and allegiance to Scripture led
        him to a point of disagreement with some of Rev. Branham’s later claims, and
        the two parted ways.</p>
        <p >Ern Baxter became the pastor of the largest church in
        Vancouver, British Columbia, and had significant spiritual leadership in the
        United Kingdom and Australia, in addition to a growing influence in the United
        States. In the early 1970s, he began to be featured in&nbsp;New Wine&nbsp;Magazine,
        and eventually became part of the Board of Directors for that ministry.</p>
        <p >One of the true landmark moments in the history of the
        Charismatic Movement was when 5,000 leaders from all major backgrounds gathered
        in Kansas City to hear Brother Ern deliver his now-famous message, “Thy Kingdom
        Come”. The congregation pulled off their shoes and worshiped the Lord in
        response. Many who attended still say it was the best Bible teach message they
        have ever heard. Another message for which he is well-known is “Life on Wings”
        or “The Eagle Sermon”.</p>
        <p >Ern eventually collected nearly 10,000 books and periodicals.
        He called his books “my friends” and said that through his books he could know
        the great people of the ages. He looked everywhere for out-of-print books – in
        old bookstores of Europe and the U.S. – and found classic works, adding them to
        his library. His teaching reflected the breadth of his study and the depth of
        his devotion to Christ. He was not merely interested in knowledge; he worked to
        pass it on to young people whom he affectionately called “Timothys.”</p>
        <p >Along with his wife, Ruth, he moved to Mobile, Alabama, in
        1980, and later to San Diego, California. Brother Ern went home to be with the
        Lord in San Diego on July 9, 1993.</p>
        <p >From 2000 through early 2015, the Ern Baxter Memorial Library
        was stewarded and owned by Charles Simpson Ministries in Mobile. In February,
        CSM donated the entire library to The King’s University at Gateway in
        Southlake, Texas, where it will be a treasured resource for a new generation of
        Christian leaders.</p>`,
      },
      {
        name: 'Jamie Buckingham',
        photo: 'jamie_buckingham.jpg',
        times: 'Tues, Thur @ 4:30AM/PM',
      },
      {
        name: 'David Wilkerson',
        photo: 'david_wilkerson.jpg',
        times: 'Tues, Thur - 8:30AM, 9:00PM',
        about: `<p><span>David Ray
        Wilkerson was born on May 19, 1931, in Hammond, Ind.; his father, Kenneth, was
        a Pentecostal minister, as was his paternal grandfather. David Wilkerson
        studied at&nbsp;</span>Central Bible College&nbsp;in Springfield, Mo.,
        affiliated with the Assemblies of God.</span> After his ordination in 1952, Mr.
        Wilkerson took a pulpit in Philipsburg, in central Pennsylvania.</span></span></p>
        <p><span>David was called to New York City
        in 1958 to minister to gang members and drug addicts, as told in the
        best-selling book The Cross and the Switchblade. He went on to create Teen
        Challenge and World Challenge, Inc. to minister to people’s spiritual and
        physical needs.</span><span> The organization
        comprises about 200 religion-based residential drug treatment centers
        throughout the country and many overseas.</span></span></span></p>
        <p><span>In 1986, while walking down 42nd
        Street at midnight, Pastor David Wilkerson’s heart broke over what he saw. At
        that time, Times Square was populated mainly by prostitutes and pimps,
        runaways, drug addicts and hustlers, along with live peep shows and X-rated
        movie houses. Pastor David cried out for God to do something—anything—to help
        the physically destitute and spiritually dead people he saw.</span></span></p>
        <p><span><span>In
        1987, he established Times Square Church<span> to
        minister to the downtrodden in one of Manhattan’s seedier precincts</span></span>.
        As its founding pastor, he faithfully led this congregation, delivering
        powerful biblical messages that encourage righteous living and complete
        reliance on God.</span> The Times Square Church is a nondenominational
        Protestant church whose worship style drew on the Pentecostal tradition. Services
        typically included gospel singing and the opportunity for congregants to
        approach the stage for healing and salvation.</span></p>
        <p><span>David Wilkerson also had a strong
        burden to encourage his fellow pastors. He founded the Summit International
        School of Ministry; and from 1999 to 2008, he held international conferences to
        strengthen church leaders.</span></span></p>
        <p><span><span>Hispassion to support believers, build up leaders and care
         for the poor is still
        at the heart of World Challenge’s ministries to this day.</span></span></p>`,
      },
      {
        name: 'Derek Prince',
        photo: 'derek_prince.jpg',
        times: 'Tues, Thur - 6:30AM, 7:00PM',
        about: `<p><span>Derek Prince was
        born into a British military family in Bangalore, India in 1915. At the age of
        14 he won a scholarship to Eton College where he studied Greek and Latin.</span>
        Derek additionally studied several modern languages including Hebrew and
        Aramaic, which he later refined at the Hebrew University in Jerusalem.</span></span></p>
        <p><span>To this day, the
        name Derek Prince remains synonymous with sound theology and the clear yet
        systematic teaching of God's Word. His steadfast faith and devotion to studying
        the scriptures turned him into one of the most respected and admired Bible
        teachers of his time.</span></span><br>
        <span>&#8205;</span><br>
        <span><span>Derek is the author of over 80 books and an
        invaluable trove of articles, letters, audio and visual recordings that immortalize
        his life's work and passion. Translated into more than 100 languages, they
        remain a source of inspiration and study for millions of Christians around the
        world.</span></span></p>
        <p><span>In May 1971,
        Derek officially opened an office in Fort Lauderdale, Florida, to publish and
        distribute his teachings. Originally known as Derek Prince Publications,
        operations gradually expanded, and in December 1990 was renamed Derek Prince
        Ministries.</span></span><br>
        <br><span><span>Today, Derek Prince Ministries has offices in over
        45 countries across the world, including&nbsp;</span></span><span>Australia</span><span>
        ,&nbsp;</span></span><span>Canada</span><span>,&nbsp;</span></span><span
        >China</span><span>,&nbsp;</span></span><span>France</span><span
       >,&nbsp;</span></span><span
        >Germany</span><span>, the&nbsp;</span></span><span>Netherlands</span><span>,&nbsp;</span></span><span
        >New Zealand</span><span>,&nbsp;</span></span><span>Norway</span><span>,&nbsp;</span></span><span
        >Russia</span><span>,&nbsp;</span></span><span>South
        Africa</span><span>,&nbsp;</span></span><span
        >Switzerland</span><span>, the&nbsp;</span></span><span>United Kingdom</span><span>&nbsp;and the&nbsp;
        </span></span><span>United States</span><span>.
        It remains steadfastly committed to resourcing the spiritually hungry, and in
        doing so, upholding the vision Derek shared in July 2002</span>:</span></p>
        <p><span><blockquote>“It is my desire,
        and I believe the Lord’s desire, that this ministry continue the work, which
        God has begun through me over sixty years ago, until Jesus returns.”</blockquote></span></span></p>
        <p><span>Derek Prince died
        of natural causes on the 24th September 2003, at the age of 88. He had suffered
        a prolonged period of declining health and passed away in his sleep at his home
        in Jerusalem.</span></span></p>`,
      },
    ],
  }),
  components: {},
};
</script>
