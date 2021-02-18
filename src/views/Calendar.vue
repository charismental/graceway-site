<template>
  <v-container fluid>
    <p class="text-center pa-0">All times are in PST</p>
    <v-row class="mt-4 mb-4 justify-center align-center">
      <v-col lg="8">
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            :events="events"
            :type="calendarType"
            :weekdays="weekday"
            :start="dailyStartDay"
            :end="dailyEndDay"
            :event-color="getEventColor"
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    weekday: [1, 2, 3, 4, 5],
    ready: false,
  }),
  computed: {
    events() {
      return [
        {
          name: 'Alistair Begg',
          start: this.setEventDateAndTime('monday', '01:00'),
          end: this.setEventDateAndTime('monday', '01:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.setEventDateAndTime('tuesday', '01:00'),
          end: this.setEventDateAndTime('tuesday', '01:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.setEventDateAndTime('wednesday', '01:00'),
          end: this.setEventDateAndTime('wednesday', '01:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.setEventDateAndTime('thursday', '01:00'),
          end: this.setEventDateAndTime('thursday', '01:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.setEventDateAndTime('friday', '01:00'),
          end: this.setEventDateAndTime('friday', '01:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.setEventDateAndTime('monday', '13:00'),
          end: this.setEventDateAndTime('monday', '13:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.setEventDateAndTime('tuesday', '13:00'),
          end: this.setEventDateAndTime('tuesday', '13:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.setEventDateAndTime('wednesday', '13:00'),
          end: this.setEventDateAndTime('wednesday', '13:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.setEventDateAndTime('thursday', '13:00'),
          end: this.setEventDateAndTime('thursday', '13:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.setEventDateAndTime('friday', '13:00'),
          end: this.setEventDateAndTime('friday', '13:30'),
          color: 'red',
        },
        {
          name: 'David Pawson',
          start: this.setEventDateAndTime('monday', '02:30'),
          end: this.setEventDateAndTime('monday', '03:30'),
          color: 'green',
        },
        {
          name: 'David Pawson',
          start: this.setEventDateAndTime('monday', '14:30'),
          end: this.setEventDateAndTime('monday', '15:30'),
          color: 'green',
        },
        {
          name: 'David Pawson',
          start: this.setEventDateAndTime('wednesday', '02:30'),
          end: this.setEventDateAndTime('wednesday', '03:30'),
          color: 'green',
        },
        {
          name: 'David Pawson',
          start: this.setEventDateAndTime('wednesday', '14:30'),
          end: this.setEventDateAndTime('wednesday', '15:30'),
          color: 'green',
        },
        {
          name: 'David Pawson',
          start: this.setEventDateAndTime('friday', '02:30'),
          end: this.setEventDateAndTime('friday', '03:30'),
          color: 'green',
        },
        {
          name: 'David Pawson',
          start: this.setEventDateAndTime('friday', '14:30'),
          end: this.setEventDateAndTime('friday', '15:30'),
          color: 'green',
        },
        {
          name: 'John Casteel',
          start: this.setEventDateAndTime('monday', '06:30'),
          end: this.setEventDateAndTime('monday', '07:30'),
          color: 'blue',
        },
        {
          name: 'John Casteel',
          start: this.setEventDateAndTime('monday', '19:00'),
          end: this.setEventDateAndTime('monday', '20:00'),
          color: 'blue',
        },
        {
          name: 'John Casteel',
          start: this.setEventDateAndTime('wednesday', '06:30'),
          end: this.setEventDateAndTime('wednesday', '07:30'),
          color: 'blue',
        },
        {
          name: 'John Casteel',
          start: this.setEventDateAndTime('wednesday', '19:00'),
          end: this.setEventDateAndTime('wednesday', '20:00'),
          color: 'blue',
        },
        {
          name: 'John Casteel',
          start: this.setEventDateAndTime('friday', '06:30'),
          end: this.setEventDateAndTime('friday', '07:30'),
          color: 'blue',
        },
        {
          name: 'John Casteel',
          start: this.setEventDateAndTime('friday', '19:00'),
          end: this.setEventDateAndTime('friday', '20:00'),
          color: 'blue',
        },
        {
          name: 'Paul Washer',
          start: this.setEventDateAndTime('monday', '08:30'),
          end: this.setEventDateAndTime('monday', '09:30'),
          color: 'purple',
        },
        {
          name: 'Paul Washer',
          start: this.setEventDateAndTime('monday', '21:00'),
          end: this.setEventDateAndTime('monday', '22:00'),
          color: 'purple',
        },
        {
          name: 'Paul Washer',
          start: this.setEventDateAndTime('wednesday', '08:30'),
          end: this.setEventDateAndTime('wednesday', '09:30'),
          color: 'purple',
        },
        {
          name: 'Paul Washer',
          start: this.setEventDateAndTime('wednesday', '21:00'),
          end: this.setEventDateAndTime('wednesday', '22:00'),
          color: 'purple',
        },
        {
          name: 'Paul Washer',
          start: this.setEventDateAndTime('friday', '08:30'),
          end: this.setEventDateAndTime('friday', '09:30'),
          color: 'purple',
        },
        {
          name: 'Paul Washer',
          start: this.setEventDateAndTime('friday', '21:00'),
          end: this.setEventDateAndTime('friday', '22:00'),
          color: 'purple',
        },
        {
          name: 'Chuck Missler',
          start: this.setEventDateAndTime('monday', '10:30'),
          end: this.setEventDateAndTime('monday', '11:00'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.setEventDateAndTime('monday', '23:00'),
          end: this.setEventDateAndTime('monday', '23:30'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.setEventDateAndTime('tuesday', '10:30'),
          end: this.setEventDateAndTime('tuesday', '11:00'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.setEventDateAndTime('tuesday', '23:00'),
          end: this.setEventDateAndTime('tuesday', '23:30'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.setEventDateAndTime('wednesday', '10:30'),
          end: this.setEventDateAndTime('wednesday', '11:00'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.setEventDateAndTime('wednesday', '23:00'),
          end: this.setEventDateAndTime('wednesday', '23:30'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.setEventDateAndTime('thursday', '10:30'),
          end: this.setEventDateAndTime('thursday', '11:00'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.setEventDateAndTime('thursday', '23:00'),
          end: this.setEventDateAndTime('thursday', '23:30'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.setEventDateAndTime('friday', '10:30'),
          end: this.setEventDateAndTime('friday', '11:00'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.setEventDateAndTime('friday', '23:00'),
          end: this.setEventDateAndTime('friday', '23:30'),
          color: 'teal',
        },
        {
          name: 'Curtis Dougherty',
          start: this.setEventDateAndTime('monday', '04:30'),
          end: this.setEventDateAndTime('monday', '05:30'),
          color: 'amber',
        },
        {
          name: 'Curtis Dougherty',
          start: this.setEventDateAndTime('monday', '16:30'),
          end: this.setEventDateAndTime('monday', '17:30'),
          color: 'amber',
        },
        {
          name: 'Curtis Dougherty',
          start: this.setEventDateAndTime('wednesday', '04:30'),
          end: this.setEventDateAndTime('wednesday', '05:30'),
          color: 'amber',
        },
        {
          name: 'Curtis Dougherty',
          start: this.setEventDateAndTime('wednesday', '16:30'),
          end: this.setEventDateAndTime('wednesday', '17:30'),
          color: 'amber',
        },
        {
          name: 'Curtis Dougherty',
          start: this.setEventDateAndTime('friday', '04:30'),
          end: this.setEventDateAndTime('friday', '05:30'),
          color: 'amber',
        },
        {
          name: 'Curtis Dougherty',
          start: this.setEventDateAndTime('friday', '16:30'),
          end: this.setEventDateAndTime('friday', '17:30'),
          color: 'amber',
        },
        {
          name: 'Ern Baxter',
          start: this.setEventDateAndTime('tuesday', '02:30'),
          end: this.setEventDateAndTime('tuesday', '03:30'),
          color: 'blue-grey',
        },
        {
          name: 'Ern Baxter',
          start: this.setEventDateAndTime('tuesday', '14:30'),
          end: this.setEventDateAndTime('tuesday', '15:30'),
          color: 'blue-grey',
        },
        {
          name: 'Ern Baxter',
          start: this.setEventDateAndTime('thursday', '02:30'),
          end: this.setEventDateAndTime('thursday', '03:30'),
          color: 'blue-grey',
        },
        {
          name: 'Ern Baxter',
          start: this.setEventDateAndTime('thursday', '14:30'),
          end: this.setEventDateAndTime('thursday', '15:30'),
          color: 'blue-grey',
        },
        {
          name: 'Jamie Buckingham',
          start: this.setEventDateAndTime('tuesday', '04:30'),
          end: this.setEventDateAndTime('tuesday', '05:30'),
          color: 'brown',
        },
        {
          name: 'Jamie Buckingham',
          start: this.setEventDateAndTime('tuesday', '16:30'),
          end: this.setEventDateAndTime('tuesday', '17:30'),
          color: 'brown',
        },
        {
          name: 'Jamie Buckingham',
          start: this.setEventDateAndTime('thursday', '04:30'),
          end: this.setEventDateAndTime('thursday', '05:30'),
          color: 'brown',
        },
        {
          name: 'Jamie Buckingham',
          start: this.setEventDateAndTime('thursday', '16:30'),
          end: this.setEventDateAndTime('thursday', '17:30'),
          color: 'brown',
        },
        {
          name: 'David Wilkerson',
          start: this.setEventDateAndTime('tuesday', '08:30'),
          end: this.setEventDateAndTime('tuesday', '09:30'),
          color: 'lime',
        },
        {
          name: 'David Wilkerson',
          start: this.setEventDateAndTime('tuesday', '21:00'),
          end: this.setEventDateAndTime('tuesday', '22:00'),
          color: 'lime',
        },
        {
          name: 'David Wilkerson',
          start: this.setEventDateAndTime('thursday', '08:30'),
          end: this.setEventDateAndTime('thursday', '09:30'),
          color: 'lime',
        },
        {
          name: 'David Wilkerson',
          start: this.setEventDateAndTime('thursday', '21:00'),
          end: this.setEventDateAndTime('thursday', '22:00'),
          color: 'lime',
        },
        {
          name: 'Derek Prince',
          start: this.setEventDateAndTime('tuesday', '06:30'),
          end: this.setEventDateAndTime('tuesday', '07:30'),
          color: 'cyan',
        },
        {
          name: 'Derek Prince',
          start: this.setEventDateAndTime('tuesday', '19:00'),
          end: this.setEventDateAndTime('tuesday', '20:00'),
          color: 'cyan',
        },
        {
          name: 'Derek Prince',
          start: this.setEventDateAndTime('thursday', '06:30'),
          end: this.setEventDateAndTime('thursday', '07:30'),
          color: 'cyan',
        },
        {
          name: 'Derek Prince',
          start: this.setEventDateAndTime('thursday', '19:00'),
          end: this.setEventDateAndTime('thursday', '20:00'),
          color: 'cyan',
        },
      ];
    },
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
      if (today >= 1 && today <= 5 && this.$vuetify.breakpoint.smAndDown) {
        const timeStamp = d.setDate(d.getDate()) - 28800000;
        const dateWithTimeZone = new Date(timeStamp).toISOString();
        return dateWithTimeZone.substring(0, 10);
      }
      return this.getPreviousMonday();
    },
    dailyEndDay() {
      return this.getPreviousMonday('friday');
    },
  },
  methods: {
    getPreviousMonday(dayOfWeek) {
      let offset = 0;
      if (dayOfWeek === 'friday') {
        offset = 4;
      } else if (dayOfWeek === 'thursday') {
        offset = 3;
      } else if (dayOfWeek === 'wednesday') {
        offset = 2;
      } else if (dayOfWeek === 'tuesday') {
        offset = 1;
      }
      const prevMonday = new Date();
      const timeStamp = prevMonday.setDate(
        prevMonday.getDate() - ((prevMonday.getDay() + 6) % 7) + offset,
      );
      const dateWithTimeZone = new Date(timeStamp - 28800000).toISOString();
      const friendlyDate = dateWithTimeZone.substring(0, 10);
      return friendlyDate;
    },
    setEventDateAndTime(dayName, time) {
      const prevDate = this.getPreviousMonday(dayName);
      if (!time) {
        return prevDate;
      }
      return `${prevDate} ${time}`;
    },
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
    content: "";
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
