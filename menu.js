const getMenuOfDay = day => {
    switch(day) {
      case 'Monday':
        return 'Veg Pulav';
      case 'Tuesday':
        return 'Sandwich';
      case 'Wednesday':
        return 'Coffee';
      case 'Thursday':
        return 'French Fries';
      case 'Friday':
        return 'Pizza';
      case 'Saturday':
        return 'Burger';
      case 'Sunday':
        return 'Eggs';
      default:
        return 'Invalid day';
    }
  };
  
  
  console.log(getMenuOfDay('Monday')); 
  console.log(getMenuOfDay('Friday')); 
  console.log(getMenuOfDay('InvalidDay')); 