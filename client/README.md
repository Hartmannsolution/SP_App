# Client application for a Studypoint / StudyActivity server
## Tech Stack
- React
- Typescript
- Bootstrap
- Axios
- React Router
- React Context
- React Hooks
- React Bootstrap
- Tailwind CSS
- Material UI

## Components (28 total in 4 routes)
1. Global components
    1. Header
        1. Register
        2. LoginForm
        3. LoggedInView
        4. NavigationBar
2. Admin (Setup)
    1. ClassCreaterForm
    2. InputSessionsForm
    3. SessionChooser (dropdown)
    4. InputStudentsForm
    5. InputActivitiesForm
    6. EditActivitiesTableForm
3. Admin (Manage)
    1. ClassChooser (dropdown)
    2. StudentsView
        1. StudentRow
    3. SessionView
        1. ActivityRow
    4. TroubleExtractor
4. Student
    1. SessionChooser (dropdown)
    2. ActivitiesList
        1. ActivityItem
    3. ActivitiesTable
        1. ActivityRow
5. Student (Learn)
    1. LearningView
        1. LearningRow

## Contexts
1. AuthContext

## Hooks
1. useAuth
2. useFetch
3. useContext
4. useReducer
5. useEffect
6. useState
7. useRef
8. useCallback
9. useMemo
10. useAppoloClient
11. useMutation
12. useQuery
13. useLazyQuery
14. useSubscription

## Custom Hooks
1. useAuth

## Routing
1. /admin/setup
2. /admin/manage
3. /student/assign
4. /student/manage
5. /student/learn
6. /login
7. /register


