import React from 'react';
import Aux from '../../hoc/Aux';


const layout = (props) => (
  <Aux>
    <div> Toolbar, SideDrawer, Backdrop </div>
      <main className={style.content}>
       {props.children}
      </main>
</Aux>
)

const classes = () => {
  content {
    margin-top:16;
  }

}

export default layout;
