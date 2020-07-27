import React from 'react';

function ButtonLink(props) {
    /*
    props => {
        className: "O que for passado",
        href: "/"
    }
    */
   console.log(props);

    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;