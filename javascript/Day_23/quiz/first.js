// const original_answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]
const original_answer = {
   q1: "Sachin Tendulkar",
   q2: "West Indies",
   q3: "Sachin Tendulkar",
   q4: "264",
   q5: "Muttiah Muralitharan"
}
const form = document.querySelector('form');

form.addEventListener("submit" , (event) => {
   event.preventDefault()

   let totalScore = 0

   const data = new FormData(form)
   
   data.forEach( (val, key) => {
      if(val === original_answer[key]) // Used === for safer comparison
         totalScore = totalScore + 1
   })

   const div = document.getElementById("result")
   
   // 1. Check if a result paragraph already exists inside the div
   let resultElement = div.querySelector("p")

   // 2. If it doesn't exist, create it once
   if (!resultElement) {
      resultElement = document.createElement("p")
      div.appendChild(resultElement)
   }

   // 3. Simply update the text (this prevents duplication)
   const totalQuestions = Object.keys(original_answer).length
   resultElement.textContent = `You got ${totalScore} out of ${totalQuestions}`
   
   console.log(totalScore)
})
