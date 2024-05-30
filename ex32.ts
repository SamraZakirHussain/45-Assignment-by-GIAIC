let current_user:string[]= ["Jia", "Elen", "Mak", "Mert","Blair"]
let new_user:string[]=["Can", "Jhon", "Sia", "Elen", "Mak"]
function checkUsernameAvailability(username: string): string {
    // Convert username to lowercase for case-insensitive comparison
    const usernameLowerCase = username.toLowerCase();
  
    // Check if the username already exists in the current user list
    const isAvailable =!current_user.some(user => user.toLowerCase() === usernameLowerCase);
  
    if (isAvailable) {
      return `${username} is available!`;
    } else {
      return `${username} is already taken. Please choose a different username.`;
    }
  }
  
  // Loop through new users and check availability
  new_user.forEach(username => {
    console.log(checkUsernameAvailability(username));
  });