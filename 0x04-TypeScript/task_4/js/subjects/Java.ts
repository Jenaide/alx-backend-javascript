/// <reference path="Teacher.ts" />


namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      const exp = this.teacher.experienceTeachingJava;
      return exp > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
  }
}
