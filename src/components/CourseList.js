import React, { useState } from 'react';
import 'rbx/index.css';
import { Button } from 'rbx';
import Course from './Course';

const terms = { F: 'Fall', W: 'Winter', S: 'Spring'};

const CourseList = ({ courses, user }) => {
    const [term, setTerm] = useState('Fall');
    const [selected, toggle] = useSelection();
    const termCourses = courses.filter(course => term === getCourseTerm(course));

    return (
        <React.Fragment>
        {/* /* react fragment groups several components into one without a div because JSX only allows one component to be returned */}
        {/* passing the state. outer brackets = tell JSX to insert value, innerbracket: make the state an object */}
        <TermSelector state={ { term, setTerm} } />
        <Button.Group>
            { termCourses.map(course => 
                <Course key={course.id} course={ course } 
                state={ { selected, toggle } } 
                user={ user }
                />) }
        </Button.Group>
        </React.Fragment>
    );
};

const TermSelector = ({ state }) => (
    // hasAddons prop just makes buttons connected 
    <Button.Group hasAddons>
        {
        Object.values(terms)
            .map(value => <Button key={value}
                                color={ buttonColor(value === state.term)}
                                onClick={ () => state.setTerm(value) }
                                >
                                { value }
                        </Button>)
        }
    </Button.Group>
);

const buttonColor = selected => (
    selected ? 'success' : null
);

const getCourseTerm = course => (
    terms[course.id.charAt(0)]
);

// behaves like useState - return two values, state value and setting function
// state setting function (toggle) will set the state to a copied list with a new element or an element removed 
// custom hook : calls a hook function (must begin with use)
const useSelection = () => {
    const [selected, setSelected] = useState([])
    const toggle = (x) => {
      setSelected(selected.includes(x) ? selected.filter(y => y !== x) : [x].concat(selected))
    };
    return [ selected, toggle ];
};

export default CourseList;
