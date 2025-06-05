<template>
  <PageBase title="Venue & Hotel">
    <div class="document-container">
      <div class="section">
        <h2>Conference Venue</h2>
        <p>
          APPT 2025 will be held at the Athenaeum Intercontinental hotel, Athens, Greece
        </p>
        <p>
          Virtual Tour: <a href="https://athenaeum.intercontinental.com/virtual_tour/index.htm" target="_blank">https://athenaeum.intercontinental.com/virtual_tour/index.htm</a>
        </p>
      </div>

      <div class="section">
        <h2>Venue Room Rates</h2>
        <p>The conference negotiated hotel room rates are available on this page:</p>
        <ul>
          <li>Classic Single Occupancy: €230 per room per night including tax and breakfast</li>
          <li>Classic Double Occupancy: €245 per room per night including tax and breakfast</li>
        </ul>
        <p>
          Climate Crisis Resilience fee is not included in the above rates. At present Climate Crisis Resilience fee is €15 per room per night.
        </p>
      </div>

      <div class="section">
        <h2>Room Reservation for Athenaeum Intercontinental</h2>
        <p>
          APPT has reserved a few rooms for our main conference attendees. A dedicated website is available for you to book hotel rooms online (July 13-17, up to four nights). Reservations can be made at this web address below:
        </p>
        <p>
          Booking Website: <a href="https://book.passkey.com/go/OPENCSF" target="_blank">https://book.passkey.com/go/OPENCSF</a>
        </p>
        <p>
          If you need extended stay (check in before July 13, or check out after July 17), please book additional nights from the official IHG website or other third-party booking sites.
        </p>
      </div>

      <div class="section">
        <h2>Recommended Hotels for APPT 2025</h2>
        <ul>
          <li>Athenaeum Intercontinental Hotel, venue location</li>
          <li>Grand Hyatt Athens, 10 min walk from the venue</li>
          <li>Athenaeum Grand Hotel, 5 min walk from the venue</li>
          <li>Hotel Ilissos, 5 min walk from the venue</li>
        </ul>
      </div>
    </div>
  </PageBase>
</template>

<script setup>
import PageBase from '@/components/PageBase.vue'
</script>

<style lang="scss" scoped>
.document-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;

  .section {
    margin-bottom: 2.5rem;

    h2 {
      color: #2c3e50;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #eee;
    }

    p {
      color: #333;
      line-height: 1.6;
      margin: 0.8rem 0;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.5rem;
      margin: 0.8rem 0;
      
      li {
        color: #333;
        line-height: 1.6;
        margin-bottom: 0.5rem;
      }
    }
  }

  a {
    color: #004380;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>