import salesimg from "../assets/images/sales-image.jpeg"
const Sales = ()=>{
  return(
    <div class="sales-image">
    <img src={salesimg} alt=""/>
    <div class="sales-image__offer">
      <h2>Udemy Flash Sales! 24 hours to save.</h2>
      <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn.</p>
    </div>
  </div>
  )
}
export default Sales