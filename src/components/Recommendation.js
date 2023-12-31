import image1 from "../assets/images/c1.jpeg"
import image2 from "../assets/images/c2.jpeg"
import image3 from "../assets/images/c3.jpeg"
import image4 from "../assets/images/c4.jpeg"

const Recommendation = ()=>{
  return(
    <div class="recommended">
    <h1>Recommended for you</h1>
    <p>Pick the best fit</p>
    <div class="recommended__container">
      <div class="course-card">
        <img src={image1} alt=""/>
        <h3>2023 Python Course</h3>
        <p>Col Steele</p>
        <p>4.8 ⭐ ⭐ ⭐ ⭐</p>
        <p>449 <del>1999</del></p>
      </div>
      <div class="course-card">
        <img src={image2} alt=""/>
        <h3>Web Development</h3>
        <p>Col Steele</p>
        <p>3.2 ⭐ ⭐ ⭐</p>
        <p>449 <del>1999</del></p>
      </div>
      <div class="course-card">
        <img src={image3} alt=""/>
        <h3>UI/UX Design</h3>
        <p>Col Steele</p>
        <p>4.8 ⭐ ⭐ ⭐ ⭐</p>
        <p>449 <del>1999</del></p>
      </div>
      <div class="course-card">
        <img src={image4} alt=""/>
        <h3>Java Programming</h3>
        <p>Col Steele</p>
        <p>4.8 ⭐ ⭐ ⭐ ⭐</p>
        <p>449 <del>1999</del></p>
      </div>
    </div>
  </div>
  )
}
export default Recommendation