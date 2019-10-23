export class StudentListService {

    students: any[] = [
        {key: '1', name: 'James A. Vincent',     educationalInstitution: 'Harvard University', pendencies: true, books:
            [
                {key: '1'},
                {key: '2'}
            ]
        },
        {key: '2', name: 'John B. Henry', educationalInstitution: 'Harvard University', pendencies: false, books: []},
        {key: '3', name: 'James R. Keaton', educationalInstitution: 'Stanford University', pendencies: false, books: []},
        {key: '4', name: 'Thomas E. Barnes', educationalInstitution: 'Stanford University', pendencies: false, books: []},
        {key: '5', name: 'Matthew T. Vasquez', educationalInstitution: 'Yale University', pendencies: false, books: []},
        {key: '6', name: 'Martin C. Reeves', educationalInstitution: 'Yale University', pendencies: true, books:
            [
                {key: '4'},
                {key: '5'},
                {key: '6'}
            ]
        },
        {key: '7', name: 'Ann R. Roos', educationalInstitution: 'Princeton University', pendencies: false, books: []},
        {key: '8', name: 'Christine H. Behrens', educationalInstitution: 'Princeton University', pendencies: false, books: []},
        {key: '9', name: 'Robert E. Martinez', educationalInstitution: 'Massachusetts Institute of Technology',
            pendencies: false, books: []},
        {key: '10', name: 'Loren C. Webb', educationalInstitution: 'Massachusetts Institute of Technology', pendencies: true, books: 
            [
                {key: '3'},
                {key: '9'}
            ]
        },
      ];

    getAll() {
        return this.students;
    }

    getById(id: string) {
        return this.students.find(s => s.key === id);
    }
}
