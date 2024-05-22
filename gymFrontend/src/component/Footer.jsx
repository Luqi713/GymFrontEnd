import React from 'react';

const sharedClasses = {
  textWhite: 'text-white',
  textRed: 'text-red-500',
  flex: 'flex',
  justifyBetween: 'justify-start',
  itemsCenter: 'items-center',
  mb4: 'mb-4',
  mb2: 'mb-2',
  py8: 'py-8',
  px4: 'px-20',
};

const GymFooter = () => {
    let logo ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BWafhdHQ1jfBpM2n4i5fbyJOD-p0Ajg4fLEdm-Q41g&s"
  return (
    <div style={{flexWrap:'wrap'}} className={`bg-black ${sharedClasses.textWhite} ${sharedClasses.py8} ${sharedClasses.px4} ${sharedClasses.flex} ${sharedClasses.justifyBetween} ${sharedClasses.itemsCenter}`}>
      <div className={sharedClasses.mb2} style={{minWidth:"400px", maxWidth:"800px", marginRight:'50px'}}>
        <img style={{width:"100px", borderRadius:"10px"}} src={logo} alt="Gym Logo" className={sharedClasses.mb2} />
        <p className={sharedClasses.textWhite}>Fitness First Gym - Barket Market, Garden townn (Lahore)</p>
        <p className={sharedClasses.textWhite}>This Fitness First location sits conveniently within Orchard Gateway, a prominent shopping mall in Singapore's bustling Orchard Road district.  Perfect for urban fitness enthusiasts, it offers state-of-the-art equipment, a variety of group fitness classes, and access to professional trainers to help you achieve your workout goals.</p>
      </div>
      <div>
        <p className={sharedClasses.textWhite}>Important Links</p>
        <ul className={sharedClasses.textRed}>
          <li><a href="#features">Features</a></li>
          <li><a href="#price">Price & Plan</a></li>
          <li><a href="#process">Workout Process</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default GymFooter;
