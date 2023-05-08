<template>
  <section>
    <div class="hotel__heading">
      <VHotelTitle :hotelName="hotelData.name" :hotelAddress="hotelData.address" />
      <div class="hotel__interaction">
        <VButtonIcon :buttonIcon="buttonIconLike" :buttonWidth="36" :buttonHeigh="36" />
        <VButtonIcon :buttonIcon="buttonIconSearch" :buttonWidth="35" :buttonHeigh="35" />
      </div>
    </div>

    <div class="hotel__property">
      <VHotelProperty
        :propertyIcon="iconBedroom"
        :propertyCount="+hotelData.info[0].bedroom"
        propertyName="Bedrooms"
      />
      <VHotelProperty
        :propertyIcon="iconBedroom"
        :propertyCount="+hotelData.info[0].bathroom"
        propertyName="Bathrooms"
      />
    </div>

    <VReserveSideBar :reservePrice="hotelData.price" class="hotel__reserve" />

    <div class="hotel__description">
      <h3 class="hotel__description-title">Apartment Description</h3>
      <VHotelDescription :hotelDescription="hotelData.description[0]" />
    </div>
  </section>
</template>

<script>
export default {}
</script>
