<template>
  <v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref='calendar'
          :events="events"
          :type="calendarType"
          :weekdays="[1,2,3,4,5]"
          :start="dailyStartDay"
          end="2021-02-05"
          :event-color='getEventColor'
        >
        <template v-slot:day-body="{ day }">
          <div
          class="v-current-time"
          :class="{ first: day === 1 }"
          :style="{ top: nowY }"
          ></div>
        </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    weekday: [1, 2, 3, 4, 5],
    value: '',
    ready: false,
    events: [
      {
        name: 'Alistair Begg',
        start: '2021-02-01 01:00',
        end: '2021-02-01 01:30',
        color: 'red',
      },
      {
        name: 'Alistair Begg',
        start: '2021-02-02 01:00',
        end: '2021-02-02 01:30',
        color: 'red',
      },
      {
        name: 'Alistair Begg',
        start: '2021-02-03 01:00',
        end: '2021-02-03 01:30',
        color: 'red',
      },
      {
        name: 'Alistair Begg',
        start: '2021-02-04 01:00',
        end: '2021-02-04 01:30',
        color: 'red',
      },
      {
        name: 'Alistair Begg',
        start: '2021-02-05 01:00',
        end: '2021-02-05 01:30',
        color: 'red',
      },
      {
        name: 'Alistair Begg',
        start: '2021-02-01 13:00',
        end: '2021-02-01 13:30',
        color: 'red',
      },
      {
        name: 'Alistair Begg',
        start: '2021-02-02 13:00',
        end: '2021-02-02 13:30',
        color: 'red',
      },
      {
        name: 'Alistair Begg',
        start: '2021-02-03 13:00',
        end: '2021-02-03 13:30',
        color: 'red',
      },
      {
        name: 'Alistair Begg',
        start: '2021-02-04 13:00',
        end: '2021-02-04 13:30',
        color: 'red',
      },
      {
        name: 'Alistair Begg',
        start: '2021-02-05 13:00',
        end: '2021-02-05 13:30',
        color: 'red',
      },
      {
        name: 'David Pawson',
        start: '2021-02-01 02:30',
        end: '2021-02-01 03:30',
        color: 'green',
      },
      {
        name: 'David Pawson',
        start: '2021-02-01 14:30',
        end: '2021-02-01 15:30',
        color: 'green',
      },
      {
        name: 'David Pawson',
        start: '2021-02-03 02:30',
        end: '2021-02-03 03:30',
        color: 'green',
      },
      {
        name: 'David Pawson',
        start: '2021-02-03 14:30',
        end: '2021-02-03 15:30',
        color: 'green',
      },
      {
        name: 'David Pawson',
        start: '2021-02-05 02:30',
        end: '2021-02-05 03:30',
        color: 'green',
      },
      {
        name: 'David Pawson',
        start: '2021-02-05 14:30',
        end: '2021-02-05 15:30',
        color: 'green',
      },
      {
        name: 'John Casteel',
        start: '2021-02-01 06:30',
        end: '2021-02-01 07:30',
        color: 'blue',
      },
      {
        name: 'John Casteel',
        start: '2021-02-01 19:00',
        end: '2021-02-01 20:00',
        color: 'blue',
      },
      {
        name: 'John Casteel',
        start: '2021-02-03 06:30',
        end: '2021-02-03 07:30',
        color: 'blue',
      },
      {
        name: 'John Casteel',
        start: '2021-02-03 19:00',
        end: '2021-02-03 20:00',
        color: 'blue',
      },
      {
        name: 'John Casteel',
        start: '2021-02-05 06:30',
        end: '2021-02-05 07:30',
        color: 'blue',
      },
      {
        name: 'John Casteel',
        start: '2021-02-05 19:00',
        end: '2021-02-05 20:00',
        color: 'blue',
      },
      {
        name: 'Paul Washer',
        start: '2021-02-01 08:30',
        end: '2021-02-01 09:30',
        color: 'purple',
      },
      {
        name: 'Paul Washer',
        start: '2021-02-01 21:00',
        end: '2021-02-01 22:00',
        color: 'purple',
      },
      {
        name: 'Paul Washer',
        start: '2021-02-03 08:30',
        end: '2021-02-03 09:30',
        color: 'purple',
      },
      {
        name: 'Paul Washer',
        start: '2021-02-03 21:00',
        end: '2021-02-03 22:00',
        color: 'purple',
      },
      {
        name: 'Paul Washer',
        start: '2021-02-05 08:30',
        end: '2021-02-05 09:30',
        color: 'purple',
      },
      {
        name: 'Paul Washer',
        start: '2021-02-05 21:00',
        end: '2021-02-05 22:00',
        color: 'purple',
      },
      {
        name: 'Chuck Missler',
        start: '2021-02-01 10:30',
        end: '2021-02-01 11:00',
        color: 'teal',
      },
      {
        name: 'Chuck Missler',
        start: '2021-02-01 23:00',
        end: '2021-02-01 23:30',
        color: 'teal',
      },
      {
        name: 'Chuck Missler',
        start: '2021-02-02 10:30',
        end: '2021-02-02 11:00',
        color: 'teal',
      },
      {
        name: 'Chuck Missler',
        start: '2021-02-02 23:00',
        end: '2021-02-02 23:30',
        color: 'teal',
      },
      {
        name: 'Chuck Missler',
        start: '2021-02-03 10:30',
        end: '2021-02-03 11:00',
        color: 'teal',
      },
      {
        name: 'Chuck Missler',
        start: '2021-02-03 23:00',
        end: '2021-02-03 23:30',
        color: 'teal',
      },
      {
        name: 'Chuck Missler',
        start: '2021-02-04 10:30',
        end: '2021-02-04 11:00',
        color: 'teal',
      },
      {
        name: 'Chuck Missler',
        start: '2021-02-04 23:00',
        end: '2021-02-04 23:30',
        color: 'teal',
      },
      {
        name: 'Chuck Missler',
        start: '2021-02-05 10:30',
        end: '2021-02-05 11:00',
        color: 'teal',
      },
      {
        name: 'Chuck Missler',
        start: '2021-02-05 23:00',
        end: '2021-02-05 23:30',
        color: 'teal',
      },
      {
        name: 'Curtis Dougherty',
        start: '2021-02-01 04:30',
        end: '2021-02-01 05:30',
        color: 'amber',
      },
      {
        name: 'Curtis Dougherty',
        start: '2021-02-01 16:30',
        end: '2021-02-01 17:30',
        color: 'amber',
      },
      {
        name: 'Curtis Dougherty',
        start: '2021-02-03 04:30',
        end: '2021-02-03 05:30',
        color: 'amber',
      },
      {
        name: 'Curtis Dougherty',
        start: '2021-02-03 16:30',
        end: '2021-02-03 17:30',
        color: 'amber',
      },
      {
        name: 'Curtis Dougherty',
        start: '2021-02-05 04:30',
        end: '2021-02-05 05:30',
        color: 'amber',
      },
      {
        name: 'Curtis Dougherty',
        start: '2021-02-05 16:30',
        end: '2021-02-05 17:30',
        color: 'amber',
      },
      {
        name: 'Ern Baxter',
        start: '2021-02-02 02:30',
        end: '2021-02-02 03:30',
        color: 'blue-grey',
      },
      {
        name: 'Ern Baxter',
        start: '2021-02-02 14:30',
        end: '2021-02-02 15:30',
        color: 'blue-grey',
      },
      {
        name: 'Ern Baxter',
        start: '2021-02-04 02:30',
        end: '2021-02-04 03:30',
        color: 'blue-grey',
      },
      {
        name: 'Ern Baxter',
        start: '2021-02-04 14:30',
        end: '2021-02-04 15:30',
        color: 'blue-grey',
      },
      {
        name: 'Jamie Buckingham',
        start: '2021-02-02 04:30',
        end: '2021-02-02 05:30',
        color: 'brown',
      },
      {
        name: 'Jamie Buckingham',
        start: '2021-02-02 16:30',
        end: '2021-02-02 17:30',
        color: 'brown',
      },
      {
        name: 'Jamie Buckingham',
        start: '2021-02-04 04:30',
        end: '2021-02-04 05:30',
        color: 'brown',
      },
      {
        name: 'Jamie Buckingham',
        start: '2021-02-04 16:30',
        end: '2021-02-04 17:30',
        color: 'brown',
      },
      {
        name: 'David Wilkerson',
        start: '2021-02-02 08:30',
        end: '2021-02-02 09:30',
        color: 'lime',
      },
      {
        name: 'David Wilkerson',
        start: '2021-02-02 21:00',
        end: '2021-02-02 22:00',
        color: 'lime',
      },
      {
        name: 'David Wilkerson',
        start: '2021-02-04 08:30',
        end: '2021-02-04 09:30',
        color: 'lime',
      },
      {
        name: 'David Wilkerson',
        start: '2021-02-04 21:00',
        end: '2021-02-04 22:00',
        color: 'lime',
      },
      {
        name: 'Derek Prince',
        start: '2021-02-02 06:30',
        end: '2021-02-02 07:30',
        color: 'cyan',
      },
      {
        name: 'Derek Prince',
        start: '2021-02-02 19:00',
        end: '2021-02-02 20:00',
        color: 'cyan',
      },
      {
        name: 'Derek Prince',
        start: '2021-02-04 06:30',
        end: '2021-02-04 07:30',
        color: 'cyan',
      },
      {
        name: 'Derek Prince',
        start: '2021-02-04 19:00',
        end: '2021-02-04 20:00',
        color: 'cyan',
      },
    ],
  }),
  computed: {
    cal() {
      return this.ready ? this.$refs.calendar : null;
    },
    nowY() {
      // eslint-disable-next-line prefer-template
      return this.cal ? this.cal.timeToY(this.cal.times.now) + 'px' : '-10px';
    },
    calendarType() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'day';
      }
      return 'custom-daily';
    },
    dailyStartDay() {
      const d = new Date();
      const today = d.getDay();
      if (today >= 1 && today <= 5) {
        return d.toISOString().substring(0, 10);
      }
      return '2021-02-01'; // monday
    },
  },
  methods: {
    getEventColor(event) {
      return event.color;
    },
    getCurrentTime() {
      return this.cal ? this.cal.times.now.hour * 60 + this.cal.times.now.minute : 0;
    },
    scrollToTime() {
      const time = this.getCurrentTime();
      const first = Math.max(0, time - (time % 30) - 30);

      this.cal.scrollToTime(first);
    },
    updateTime() {
      setInterval(() => this.cal.updateTimes(), 60 * 1000);
    },
  },
  mounted() {
    this.ready = true;
    this.scrollToTime();
    this.updateTime();
  },
};
</script>

<style lang="scss" scoped>
.v-current-time {
  height: 2px;
  background-color: #ea4335;
  position: absolute;
  left: -1px;
  right: 0;
  pointer-events: none;

  &.first::before {
    content: '';
    position: absolute;
    background-color: #ea4335;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-top: -5px;
    margin-left: -6.5px;
  }
}
::v-deep .v-calendar-daily_head-day-label {
  display: none !important;
}
::v-deep .v-calendar-daily_head-weekday {
  padding-bottom: 2em;
  font-weight: bold;
}
</style>
