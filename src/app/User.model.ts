export class User {

    constructor(	//userid: number,  // will be autogenerated
        public username?: String,
        public email?: String,
        public name?: String,
        public location?: String,
        //String photo,
        //String resume,
        //String skills;
        public password?: String,
        public role?: String,
        public education?: String,
        //Set<Job> jobs = new HashSet<>()
    ) { }

   
}