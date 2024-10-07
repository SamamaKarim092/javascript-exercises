const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        // Calculate current person's age
        const currentYear = (current.yearOfDeath || new Date().getFullYear());
        const currentAge = currentYear - current.yearOfBirth;

        // Calculate oldest person's age
        const oldestYear = (oldest.yearOfDeath || new Date().getFullYear());
        const oldestAge = oldestYear - oldest.yearOfBirth;

        // Return the person with the greater age
        return currentAge > oldestAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
