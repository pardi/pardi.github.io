import Robot from '../Components/Robot'
import Header from "../Components/Header";
import ProjectLayout from '../Components/ProjectLayout'
import styles from '../styles/Global.module.scss'


export const FabrikPage = ({ menu }) => {

  const description = (
  <> 
    <h1>Description</h1>
    <p>
    The robot inverse kinematics is one of the most common problem to solve when working with robots.
    It refers to how obtain the joint angles for the robot given the cartesian pose (position and orientation) of a part of the robot, usually the end-effector.
    </p>
    <p>
    Common methodologies to solve the inverse kinematics problem use the jacobian of the robot and a iterative procedure using gradient descent. Howver, when the number of degrees of freedom (dof) become too great, the problem becames very challenging and time consuming.
    </p>
    <p>                       
      Fabrik provides a different method to compute the inverse kinematics of a robot by using cartesian points and distances. It proves extremely quick to obtain a solution, even for high number of dofs. Moreover, the implementation does not require previous knowledge of robotics kinematics - although it helps.
    </p>
    <p>
      This project aimed to implement fabrik for a 2d kinematic chains with only revolute joints using React components.
    </p>
    <a href='https://github.com/pardi'>github code</a>            
  </>);

  return (
    <>
      <Header menu={menu}/>
      <div className={styles.bodyContainer}>
        <ProjectLayout firstDiv_children={<Robot />} secondDiv_children={description} />
      </div>
    </>
  )
}
