let militaryUnit = {
    name: "1st Infantry Division",
    location: "Fort Bragg, North Carolina, USA",
    establishmentDate: "1941-06-01",
    unitType: "Infantry Division",
    commandStructure: {
      commandingOfficer: {
        rank: "Major General",
        name: "John Doe",
        contact: {
          email: "john.doe@example.com",
          phone: "+1-555-123-4567",
        },
      },
      executiveOfficer: {
        rank: "Colonel",
        name: "Jane Smith",
        contact: {
          email: "jane.smith@example.com",
          phone: "+1-555-987-6543",
        },
      },
      chiefOfStaff: {
        rank: "Brigadier General",
        name: "Robert Brown",
        contact: {
          email: "robert.brown@example.com",
          phone: "+1-555-555-1234",
        },
      },
    },
    personnel: [
      {
        id: 1,
        name: "Private First Class Alice Johnson",
        rank: "Private First Class",
        role: "Rifleman",
        contact: {
          email: "alice.johnson@example.com",
          phone: "+1-555-000-1111",
        },
      },
      {
        id: 2,
        name: "Sergeant Michael White",
        rank: "Sergeant",
        role: "Squad Leader",
        contact: {
          email: "michael.white@example.com",
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
        {
          type: "M16 Rifle",
          quantity: 500,
          status: "Operational",
        },
        {
          type: "M249 SAW",
          quantity: 100,
          status: "Operational",
        },
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
      {
        programName: "Basic Combat Training",
        duration: 10,
        focus:
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
      },
      {
        programName: "Advanced Individual Training",
        duration: 12,
        focus:
          "Specialized training for specific military occupational specialties.",
      },
    ],
  
    history: [
      {
        eventDate: "1941-06-01",
        eventDescription: "Establishment of the 1st Infantry Division.",
      },
      {
        eventDate: "1944-06-06",
        eventDescription: "Participated in the D-Day landings in Normandy.",
      },
    ],
    currentDeployment: {
      location: "Middle East",
      mission: "Counter-terrorism operations",
      startDate: "2024-01-01",
      estimatedEndDate: "2024-12-31",
    },
};



function Mission1(unitData){
    return `
Details of the chief of staff:
Rank: ${unitData.commandStructure.chiefOfStaff.rank}
Name: ${unitData.commandStructure.chiefOfStaff.name}
Phone: ${unitData.commandStructure.chiefOfStaff.contact.phone}  
    `;
}

function Mission2(unitData){
    return `
The number of soldiers in the unit:
${unitData.personnel.length}
    `
}

function Mission3(newDeployment, unitData){
    let curr = unitData.currentDeployment;
    unitData.currentDeployment = newDeployment;
    unitData.history.push({eventDate: curr.startDate, eventDescription: curr.mission});
    return unitData;
}

function Mission4(firearm, unitData){
    let firearms = unitData.equipment.firearms;
    for (let i = 0; i < firearms.length; i++){
        if (firearms[i].type === firearm.type){
            firearms[i].quantity += 1;
            break;
        }
        if (i === firearms.length - 1){
            firearms.push(firearm);
        }
    }
    return unitData;
}

function Mission5(unitData){
    let sum = unitData.trainingPrograms.reduce((a, b) => a + b.duration, 0);
    return `
    The total duration of training programs: ${sum}
    `;
}



module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4,
    Mission5
}

console.log(Mission5(militaryUnit))