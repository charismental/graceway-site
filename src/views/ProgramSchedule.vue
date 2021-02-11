<template>
  <div class="program-schedule">
    <v-container>
      <v-row align="center" justify="center">
        <v-col v-for="(s, index) in speakers" :key="s.name"
        :cols="$vuetify.breakpoint.smallAndDown ? '11' : '6'">
          <v-card outlined>
            <v-row justify="space-between">
              <v-col align-self="start" cols="3">
                <v-avatar tile size="150" :class="$vuetify.breakpoint.xs ? 'ma-1' : 'pa-2'">
                  <v-img :src="require('@/assets/' + s.photo)" cover></v-img>
                </v-avatar>
              </v-col>
              <v-col align-self="end">
                <v-list-item class="ml-auto">
                  <v-list-item-content>
                    <v-list-item-title title>
                      {{ s.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle
                      :style="$vuetify.breakpoint.xs ? 'font-size:0.8rem;' : ''"
                    >
                      <!-- TIMES NEEDS TO BE SPLIT AND WRAPPED IN FLEXBOX -->
                      {{ s.times }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col align-self="center">
                <v-btn color="primary" dark @click.stop="$set(dialog, index, true)">
                  Read More</v-btn>
                <v-dialog v-model="dialog[index]" max-width="800" :key="s.name" scrollable>
                <v-card>
                  <v-card-title class="headline">{{ s.name }}</v-card-title>
                  <v-card-text v-html="s.about"></v-card-text>
                  <v-card-actions>
                    <v-spacer> </v-spacer>
                    <v-btn color="blue" text @click="$set(dialog, index, false)">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
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
    dialog: {},
    speakers: [
      {
        name: 'Alistair Begg',
        photo: 'alistair_begg.jpg',
        times: 'Weekdays @ 1:00AM/PM',
        about: `<p >Alistair Begg has been
        in pastoral ministry since 1975. Following graduation from The
        London School of Theology, he served eight years in Scotland at
        both Charlotte Chapel in Edinburgh and Hamilton Baptist Church.
        </p><p >In 1983, he became the senior
        pastor at Parkside Church
        &nbsp;near Cleveland, Ohio. &nbsp;He has written several books
        and is heard daily and weekly on the radio program, Truth For
        Life. &nbsp;The teaching on Truth For Life stems from the week
        by week Bible teaching at Parkside Church.</p><p >
        On February 27, 1995, Truth for Life began airing its 25-minute
        daily program on seven radio stations. Today, Truth for Life can now
        be heard in every major radio market across the U.S. and select
        Canadian markets.</p><p >In 2009,
        driven by the desire to share the
        good news of the Gospel without cost
        as a barrier, the ministry made the
        entire Truth For Life teaching archive
        free for download at truthforlife.org
        . Since then, over 55
        million messages have been downloaded.</p>
        <p >Because of this encouraging response,
        Truth for LIfe made all of its CDs, DVDs, and books by Alistair Begg
        and others available at cost, with no markup. Led by Alistair Begg and
        overseen by an independent, volunteer board of trustees, Truth for
        LIfe is a Bible-teaching ministry seeking to faithfully proclaim the
        Word of God. </p>`,
      },
      {
        name: 'David Pawson',
        photo: 'david_pawson.png',
        times: 'Mon, Wed, Fri @ 2:30AM/PM',
        about: `<p class="c2 c4">Born in England in 1930,
        David began his career with a degree in Agriculture from Durham University.
        When God intervened and called him to become a Minister, he completed an MA
        in Theology at Cambridge University and served as a Chaplain in the Royal Air
        Force for 3 years. He moved on to pastor several churches including the Millmead
        Centre in Guildford which became a model for many UK church leaders. In 1979, the
        Lord led him into an international ministry&nbsp;and in his
        later years in an itinerant ministry
        &nbsp;<span class="c3 c1">predominantly to church leaders. </p>
        <p class="c2 c4">David was considered to be one of the world&rsquo;s
        finest biblical expositors. Over the years, he
        wrote<span class="c1 c3">&nbsp;many books, booklets, and daily
        reading notes. His extensive and very accessible overviews of the books of the Bible
        have been published and recorded. Millions of copies of his teachings have been
        distributed in more than 120 countries, providing a solid biblical foundation.&nbsp;
        </p><p class="c2 c4">David was passionate about teaching the
        Bible and believed every teacher has a responsibility to expound the truth and expose
        error. He encouraged&nbsp;everyone to
        read the Bible for themselves, not verse by verse but to read each verse in the context
        in which they were written. He believed too
        many people misquote Bible verses by taking them out of context. David teache
        d<span class="c3 c1">&nbsp;that a &lsquo;text out of context
        becomes a pretext&rsquo; to a whole new and wrong meaning to that for which the
         verse was written.</p><p class="c2 c4">Best known for his
         series Unlocking the Bible, David taught that the Bible Is not one book but a library
         of books. He taught each book
         is different, written by many different writers. To understand each book of the
         Bible you first need to understand
         <span class="c3 c1">&nbsp;&lsquo;Who&rsquo; wrote the book, and second &lsquo;Why&rsquo;
         the book was written. He was an advocate that the solution to every situation in life can
         be found by reading the scriptures.</p><p >&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;David Passed away in 2020
         &nbsp;but his ministry continues
         &nbsp;to bless millions of believers worldwide.</p>`,
      },
      {
        name: 'John Casteel',
        photo: 'john_casteel.jpg',
        times: 'Mon, Wed, Fri - 6:30AM, 7:00PM',
        about: '',
      },
      {
        name: 'Paul Washer',
        photo: 'paul_washer.jpg',
        times: 'Mon, Wed, Fri - 8:30AM, 9:00PM',
        about: `<p >Paul Washer became a believer
        while studying at the University of Texas. He completed his undergraduate
        studies and enrolled at Southwestern Theological Seminary, where he
        received his Master of Divinity degree. After graduating, he moved to
        Peru and served there as a missionary for ten years, during which time
        he founded the HeartCry Missionary Society to support Peruvian church
        planters. HeartCry&rsquo;s work now supports indigenous missionaries
        throughout Africa, Asia, Europe, the Middle East, Eurasia, and Latin
        America.</p><p >Anyone unfamiliar
        with the burden of Paul Washer&#39;s ministry should become so. Any
        believer already familiar with his ministry will know why
        that is said. If we could&nbsp;sum up
        Paul&#39;s ministry in a few words&nbsp;they would be as follows:
        </p><p >Paul Washer has been used
        of God in our time for a widespread recovery of:
        </p><ol class="c3 lst-kix_a680ohricn9f-0 start" start="1">
        <li class="c5 li-bullet-0">The true Gospel
        and a biblical basis for Christian assurance</li><li class="c5
        li-bullet-0">An evangelistic approach and
        presentation that maintains biblical integrity</li><li class="c5
        li-bullet-0">The importance of practical
        holiness in all of life and especially in the home.</li></ol><p
        >Paul believes &ndash; &ldquo;<span
        >We glorify God more by demonstrating to people all that the
        Lord has done for us, instead of demonstrating to everyone what we&rsquo;ve
        done for the Lord.&rdquo;</p><p >Paul
        now serves as one of the laborers with the HeartCry Missionary Society.
        He and his wife Charo have three children: Ian, Evan, and Rowan.
        </p><p ></p>`,
      },
      {
        name: 'Chuck Missler',
        photo: 'chuch_missler.jpg',
        times: 'Weekdays - 10:30AM, 11:00PM',
        about: `<p >As a child, Chuck Missler
        developed an intense interest in the Bible; studying it became a favorite
        pastime. In the 1970s, while still in the corporate world, Chuck began leading
        weekly Bible studies at the 30,000-member Calvary Chapel Costa Mesa, in California
        where thousands of cassette tapes were distributed each month. At which time he was
        one of the founding members of the Biblical Research Center.</p><p >
        &nbsp;In 1973 He and his wife Nancy established&nbsp;Koinonia House.
        Over the years, he had developed a loyal following. Koinonia House
        &nbsp;then became his full-time profession. He also helped start BlueLetterBible.org
        and AudioCentral.com. </p><p >Chuck&#39;s
        thirty-minute 66/40 radio program airs on more than 3,000 radio stations worldwide
        and is one of the only ad-free teaching segments on Christian radio.</p>
        <p >Chuck is a prominent speaker about bible prophecy. Chuck has
         numerous programs aired on the Christian television stations, namely his biblical
          studies&nbsp;Learn the Bible in 24 Hours,
          &nbsp;The Book of Revelation,&nbsp;
          The Book of Genesis, and&nbsp;
          The Book of Daniel,&nbsp;as well as his topical studies&nbsp;
          Return of the Nephilim&nbsp;and his&nbsp;
          Angels&nbsp;series.
          </p><p >In May 2018, Chuck&nbsp;passed away peacefully
           at his home in Reporoa, New Zealand. He was preceded in death by his wife Nancy
            and his two sons, Charles &ldquo;Chip&rdquo; and Mark. He is survived by
            two daughters, Lisa Bright and Meshell Missler, and eight grandchildren.</p>`,
      },
      {
        name: 'Curtis Dougherty',
        photo: 'curtis_dougherty.jpg',
        times: 'Mon, Wed, Fri @ 4:30AM/PM',
        about: `<p >Born in Los Angeles, California in 1953,
        Curtis Dougherty began his walk with the Lord at the tender age of 5 years old.
        His family was quite poor and moved numerous times a year until he reached High
        School. He is thankful for his upbringing because it instilled in him not only
        what it meant to be a family, but also what it meant to completely trust in the
        Lord&rsquo;s provision and guidance. </p><p >
        </p><p >During his High School years, he worked
        &ldquo;morning tower&rdquo; (midnight to 8:00 am) as a roughneck in the oil fields
        of Oklahoma and then rushed off to clean up and get to school. Fortunately, even
        though he was often late and sometimes fell asleep in class, his teachers were
        understanding of his situation. </p><p >
        </p><p >However, keeping these kinds of hours and working
        among worldly men did nothing to encourage his walk with the Lord and he and his
        girlfriend found themselves in an unwanted pregnancy. So, at the age of 18, finding
        himself the sole breadwinner and head of his own family, his love and need for the
        Lord led him on a new and more passionate desire for the things of God. </p>
        <p class="c0 c4"></p><p >With
        his new family, he began attending a local church, but he soon discovered that the
        life in Christ they presented was merely one of service to the church. His longing
        for the intimate relationship with the Lord he had as a young boy eventually led
        him to a small prayer meeting in the home of a local businessman. It was there he
        met others who longed to know the Lord more and through their ministry Curtis
        experienced the baptism in the Holy Spirit.</p><p >
        </p><p >His marriage fell apart when his wife
        decided that she no longer wanted to walk with God, the heartbreak of her decision
        only propelled Curtis into a deeper and more real relationship with Jesus. At this
        time, he found himself in Tucson, Arizona under the ministry and mentoring of &nbsp;
        Dr. John Castell who was pastor of Grace Chapel. Under Pastor John&rsquo;s leadership,
        Curtis learned what it meant to not only lead a Full Gospel church but also how to
        truly love God&rsquo;s people in the process. </p><p >
        &nbsp; &nbsp;</p><p >Since then, Curtis Dougherty
        has been in ministry for over 40 years, and a pastor for over 30. As a gifted speaker
        &amp; teacher, he has inspired many into a deeper intimate relationship with the Lord.
        The hallmark of his ministry has been to teach others to come into the presence of
        the Lord and accurately hear His voice. His Spirit-led counseling has led many people
        into freedom in Christ.</p><p ></p>
        <p >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        He also has a unique ministry of encouragement to pastors and leaders on the front
        lines of Christianity. He has gently led churches of all sizes into the fullness of
        the Spirit with decency and order. As an anointed speaker, he is able to reach
        beyond denominational lines, bringing scripture alive with such passion that hearers
        from all Christian backgrounds are forever changed.</p><p >
        </p><p >Curtis currently pastors
        Cascade Chapel in Burlington, Washington and resides in Mount Vernon, Washington
        with his wife of 38 years, Jacque, his mother, who suffers from Alzhimer&rsquo;s
        disease, their Jack Russell, Milo and three ridiculously spoiled cats.</p>`,
      },
      {
        name: 'Ern Baxter',
        photo: 'ern_baxter.jpg',
        times: 'Tues, Thur @ 2:30AM/PM',
        about: `<p >Ern Baxter, born in 1914,
        is remembered as one of the greatest Christian preachers of the 20th
        Century, and he served the Lord for more than 60 years as evangelist,
        teacher, worship leader, and prophetic teacher. William John Ernest
        Baxter was born on the prairies of western Canada in Saskatchewan.
        Though he did not complete High School, he was a voracious collector
        and reader of books, and traveled worldwide in ministry. He became an
        orator without parallel.</p><p >After
        experiencing a life-changing miraculous healing, Brother Ern testified
        of being filled with the Holy Spirit and began to preach across Canada.
        Ern Baxter became the pastor of the largest church in Vancouver, British
        Columbia. He had significant spiritual leadership in the United Kingdom
        and Australia, in addition to a growing influence in the United States.
        In the early 1970s, he began to be featured in&nbsp;New Wine&nbsp;Magazine,
        and eventually became part of the Board of Directors for that ministry.
        </p><p >One of the true landmark moments
        in the history of the Charismatic Movement was when 5,000 leaders from
        all major backgrounds gathered in Kansas City to hear Brother Ern deliver
        his now-famous message, &ldquo;Thy Kingdom Come&rdquo;. The congregation
        pulled off their shoes and worshiped the Lord in response. Many who
        attended still say it was the best Bible message they have ever heard.
        Another message for which he is well-known is &ldquo;Life on Wings&rdquo;
        or &ldquo;The Eagle Sermon&rdquo;.</p><p >
        Ern eventually collected nearly 10,000 books and periodicals. He called
        his books &ldquo;my friends&rdquo; and said that through his books he
        could know the great people of the ages. He looked everywhere for
        out-of-print books &ndash; in old bookstores of Europe and the U.S. &ndash;
         and found classic works, adding them to his library. His teaching
         reflected the breadth of his study and the depth of his devotion
         to Christ. He was not merely interested in knowledge; he worked
         to pass it on to young people whom he affectionately called &ldquo;
         Timothys.&rdquo;</p><p >Along
         with his wife, Ruth, he moved to Mobile, Alabama, in 1980, and later
         to San Diego, California. Brother Ern went home to be with the Lord
         in San Diego on July 9, 1993.</p>`,
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
        about: `<p ><span class="c1 c3">David Ray Wilkerson was born
        in <span class="c1 c3">1931, in Hammond,
        Indiana<span class="c1 c3">; his father,
        Kenneth, was a Pentecostal minister, as was his paternal grandfather.
        He <span class="c1 c3">studied at&nbsp;
        Central Bible College&nbsp;in Springfield, Missouri
        <span class="c1 c3">, affiliated with the Assemblies of God.
        After his ordination in 1952, Mr. Wilkerson took a pulpit in Philipsburg,
        in central Pennsylvania.</p><p >David
        was called to New York City in 1958 to minister to gang members and drug
         addicts, as told in the best-selling book The Cross and the Switchblade.
         In 1986, while walking down 42nd Street at midnight, Pastor David
         Wilkerson&rsquo;s heart broke over what he saw. At that time, Times
         Square was populated mainly by prostitutes and pimps, runaways, drug
         addicts and hustlers, along with live peep shows and X-rated movie houses.
          Pastor David cried out for God to do something&mdash;anything&mdash;to
          help the physically destitute and spiritually dead people he saw.
          </p><p >In 1987, he established Times Square
          Church<span class="c1 c3">&nbsp;to minister to the downtrodden
          in one of Manhattan&rsquo;s seedier precincts.
          As its founding pastor, he faithfully led this congregation, delivering
          powerful biblical messages that encourage righteous living and complete
          reliance on God. <span class="c1 c5">Wilkerson&#39;s widely
          distributed sermons are known for being direct and frank against apostasy
          and serious about making the commitment to obey Jesus&#39; teachings.
          </p><p >He went on to create Teen Challenge and
          World Challenge, Inc. to minister to people&rsquo;s spiritual and
          physical needs.&nbsp;The organization now
          comprises about 200 religion-based residential drug treatment centers
          throughout the country and many overseas.</p><p >
          David Wilkerson also had a strong burden to encourage
          his fellow pastors. He founded the Summit International School of
          Ministry; and from 1999 to 2008, he held international conferences to
          strengthen church leaders.</p><p >
          His passion to support believers, build up leaders and care for the
          poor is still at the heart of World Challenge&rsquo;s ministries to
          this day.&nbsp;<span class="c5 c1">Sadly, Wilkerson
          was killed in a head-on car crash in Texas on April 27, 2011. He was 79.
          </p><p ></p>`,
      },
      {
        name: 'Derek Prince',
        photo: 'derek_prince.jpg',
        times: 'Tues, Thur - 6:30AM, 7:00PM',
        about: `<p ><span class="c2 c3">Derek Prince was born into a
        British military family in Bangalore, India in 1915. At the age of 14 he
        won a scholarship to Eton College where he studied Greek and Latin. Derek
        additionally studied several modern languages including Hebrew and Aramaic,
        which he later refined at the Hebrew University in Jerusalem.</p>
        <p >To this day, the name Derek Prince remains
        synonymous with sound theology and the clear yet systematic teaching of
        God&#39;s Word. His steadfast faith and devotion to studying the scriptures
        turned him into one of the most respected and admired Bible teachers of his
        time.<br><span class="c3 c4">&zwj;<br>&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c2 c3">Derek
        is the author of over 80 books and an invaluable trove of articles, letters,
        audio and visual recordings that immortalize his life&#39;s work and passion.
        Translated into more than 100 languages, they remain a source of inspiration
        and study for millions of Christians around the world.</p><p >
        In May 1971, Derek officially opened an office in Fort Lauderdale,
        Florida, to publish and distribute his teachings. Originally known as Derek
        Prince Publications, operations gradually expanded, and in December 1990 was
        renamed Derek Prince Ministries.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;Today, Derek Prince Ministries
        has offices in over 45 countries across the world. <span class="c2 c3">
        It remains steadfastly committed to resourcing the spiritually hungry, and
        in doing so, upholding the vision Derek shared in July 2002:</p>
        <p ><span class="c2 c3">&ldquo;It is my desire, and I believe the
        Lord&rsquo;s desire, that this ministry continue the work, which God has
        begun through me over sixty years ago, until Jesus returns.&rdquo;</p>
        <p >Derek Prince died of natural causes on the
        24th September 2003, at the age of 88. He had suffered a prolonged period of
        declining health and passed away in his sleep at his home in Jerusalem.</p>`,
      },
    ],
  }),
  components: {},
};
</script>
