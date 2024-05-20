// Options the user could type in

let date=new Date(); 
var currentdate=new Date().toLocaleDateString();
var time=new Date().toLocaleTimeString();
// const prompts = [
//   1  ["hi", "hey", "hello", "good morning", "good afternoon"],
//     ["how are you", "how is life", "how are things"],
//    3 ["what are you doing", "what is going on", "what is up"],
//     29["how old are you"],
//    4 ["who are you", "are you human", "are you bot", "are you human or bot"],
//   5  ["who created you", "who made you"],
//   6  [
//       "your name please",
//       "your name",
//       "may i know your name",
//       "what is your name",
//       "what call yourself"
//     ],
//    8 ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
//   9  ["bad", "bored", "tired"],
//   10  ["help me", "tell me story", "tell me joke"],
//    11 ["ah", "yes", "ok", "okay", "nice"],
//   12  ["bye", "good bye", "goodbye", "see you later"],
//   13  ["what should i eat today"],
//   14  ["bro"],
//   15  ["what", "why", "how", "where", "when"],
//   16  ["no","not sure","maybe","no thanks"],
//   17  [""],
//   18  ["haha","ha","lol","hehe","funny","joke"],
//   19  ["food donate","project" ],
//   20  ["date"],
//    21 ["time"],
//   22   ["what can i donate","donate"],
//   23  ["trust in madurai","ngos in madurai"],
//   24  ["tell joke"],
//    25 ["how can I package my cooked or raw food donations","cooked food donation","raw food donate"],
//   26  ["how my donation is used"],
//   27  ["can i donate cooked food"],
//   28  ["what are the guidelines for donating"]
//   ],
   

  
//   // Possible responses, in corresponding order
  
//   const replies = [
//    1 ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
    
//    2 [
//       "Fine... how are you?",
//       "Pretty well, how are you?",
//       "Fantastic, how are you?"
//     ],
//    3 [
//       "Nothing much",
//       "About to go to sleep",
//       "Can you guess?",
//       "I don't know actually"
//     ],
//   4  ["I am infinite"],
//   5  ["I am just a bot", "I am a bot. What are you?"],
    
//   6  ["I am nameless", "I don't have a name"],
//    7 ["I am chatbot i can help you in various ways"],
//   9  ["Have you ever felt bad?", "Glad to hear it"],
//   10  ["Why?", "Why? You shouldn't!", "Try watching TV"],
//    11 ["What about?", "Once upon a time..."],
//    12 ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
//     // ["varata mame durr"],
//    13 ["Bye", "Goodbye", "See you later"],
//    14 ["Sushi", "Pizza"],
//    15 ["Bro!"],
//    16 ["Great question"],
//    17 ["That's ok","I understand","What do you want to talk about?"],
//    18 ["Please say something :("],
//    19 ["Haha!","Good one!"],
//    20 ["  The basic concept of this project  Food Waste Management is to collect theexcess/leftover food from donors such as hotels, restaurants, marriage halls, etc and distribute to  the  needy people"],
//     21["currentdate"],
//    22 ["time"],
//     23["you can donate various items"],
//    24 ["Madurai old age Charitable Trust,208, East Veli Street, Near Keshavan Hospital, "],
//    25 ["joke ha ha .."],
//    26 ["You can package your cooked or raw food donations in airtight containers such as Tupperware or plastic bags. You can also use aluminum foil or cling wrap to keep the food fresh. Please make sure to label the containers with the type of food, date, and any relevant instructions"],
//    27  ["Your donation will be used to support our mission and the various programs and initiatives that we have in place. Your donation will help us to continue providing assistance and support to those in need. You can find more information about our programs and initiatives on our website"],
//     28 ["Yes, you can donate cooked food as long as it is prepared in a licensed kitchen, packaged properly and kept at safe temperatures. Please contact us for further instructions and guidelines"],
//     29 ["When donating raw ingredients, please ensure that the items are unopened and unexpired."]
//   ],
     

const prompts = [
      ["hi", "hey", "hello", "good morning", "good afternoon"],
      ["how are you", "how is life", "how are things"],
      ["what are you doing", "what is going on", "what is up"],
      ["how old are you"],
      ["who are you", "are you human", "are you bot", "are you human or bot"],
     ["who created you", "who made you"],
     [
        "your name please",
        "your name",
        "may i know your name",
        "what is your name",
        "what call yourself"
      ],
    ["is there a minimum donation amount"],
    ["how can i make a donation"],
     ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
     ["help me", "tell me story", "tell me joke"],
      ["ah", "yes", "ok", "okay", "nice"],
     ["bye", "good bye", "goodbye", "see you later"],
      ["can i specify how i want my donation to be used"],
      ["bro"],
      ["what", "why", "how", "where", "when"],
      ["no","not sure","maybe","no thanks"],
     [""],
     ["are donations tax deductible"],
     ["food donate","project" ],
     ["date"],
      ["time"],
      ["what can i donate","donate"],
     ["can i donate anonymously"],
     ["how to donate"],
     ["how can i package my cooked or raw food donations","cooked food donation","raw food donate"],
     ["how my donation is used"],
     ["can i donate cooked food"],
     ["what are the guidelines for donating"],
     ["how can my organization register to receive donations through your platform"],
     ["what types of organizations do you support"],
     ["how can my organization receive donations through your platform"],
     ["is there a fee for organizations to use your platform"],
     ["what types of projects or initiatives do you support"],
     ["is my personal information secure"],
    ]
    
    // Possible responses, in corresponding order
    
    const replies = [
      ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
      [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
      ],
      [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
      ],
      ["I am infinite"],
      ["I am just a bot", "I am a bot. What are you?"],
      
     ["I am nameless", "I don't have a name"],
      ["I am a Bot and help you in many ways"],
      ["while there is no minimum donation amount every contribution makes a difference in supporting our cause."],
      ["You can make a donation by clicking on the donate Now button on our website and following the instructions to complete the payment process securely."],
      ["Have you ever felt bad?", "Glad to hear it"],
      ["Why?", "Why? You shouldn't!", "Try watching TV"],
      ["What about?", "Once upon a time..."],
      ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
      // ["varata mame durr"],
      ["Bye", "Goodbye", "See you later"],
      ["Absolutely! during the donation process, you can specify if you have a preference for how your donation is allocated, such as to a specific program or project."],
      ["Bro!"],
      ["Great question"],
      ["That's ok","I understand","What do you want to talk about?"],
      ["Please say something :("],
      [" Yes, donations made to our organization are tax deductible. You will receive a tax receipt for your contribution."],
      ["  The basic concept of this project  Food Waste Management is to collect theexcess/leftover food from donors such as hotels, restaurants, marriage halls, etc and distribute to  the  needy people"],
      ["currentdate"],
     ["time"],
      ["you can donate various items"],
     ["Yes, you can choose to donate anonymously during the donation process. Your privacy is important to us."],
      ["please click on donate button to donate"],
      ["You can package your cooked or raw food donations in airtight containers such as Tupperware or plastic bags. You can also use aluminum foil or cling wrap to keep the food fresh. Please make sure to label the containers with the type of food, date, and any relevant instructions"],
      ["Your donation will be used to support our mission and the various programs and initiatives that we have in place. Your donation will help us to continue providing assistance and support to those in need. You can find more information about our programs and initiatives on our website"],
       ["Yes, you can donate cooked food as long as it is prepared in a licensed kitchen, packaged properly and kept at safe temperatures. Please contact us for further instructions and guidelines"],
      ["When donating raw ingredients, please ensure that the items are unopened and unexpired."],
      ["You can register your organization by filling out our online application form on our website. Once submitted, our team will review your application and follow up with next steps."],
      ["We support a wide range of nonprofit organizations, including charities, NGOs, community groups, and more. If you're unsure if your organization qualifies, feel free to reach out to us for clarification."],
      ["You can sign up as a partner organization on our website and complete the registration process. Once approved, you can start receiving donations from our platform."],
      ["We do not charge organizations any fees to use our platform. However, there may be processing fees associated with receiving donations."],
      ["We support a wide range of projects and initiatives, including education, healthcare, environmental conservation, and more. You can submit a proposal outlining your project for consideration."],
      ["Yes, we take the security and privacy of your personal information seriously. We use encryption and other security measures to protect your data."],
      
    ]
  
  // Random for any other user input
  
  const alternative = [
    // "Same",
    // "Go on...",
    // "Bro...  i don't know",
    // "Try again",
    // // "I'm listening...:/",
    "I don't understand ",
    " 😢sorry i am still under development "
  ]
  
  // Whatever else you want :)
  
  const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]