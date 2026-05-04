---
title: "Building an Autonomous Robot with ROS2"
date: "2023-10-15"
preview: "A deep dive into how I built my first autonomous differential drive robot using ROS2, Navigation2 stack, and an RP LiDAR."
---

# Building an Autonomous Robot with ROS2

Building a robot from scratch is a rewarding experience. In this post, I'll walk you through the hardware components and the software stack required to build an autonomous robot.

## The Hardware

The foundation of my robot relies on:
- **Raspberry Pi 4**: The brain of the operation, running Ubuntu Server and ROS2 Humble.
- **ESP32 Microcontroller**: Acts as the low-level motor controller.
- **L298N Motor Driver**: Handles the current for the DC motors.
- **RPLiDAR A1**: A 360-degree laser scanner for mapping and obstacle avoidance.

## The Software Stack

### 1. ROS2 (Robot Operating System)
I chose ROS2 over ROS1 for its improved security, real-time capabilities, and decentralized architecture (thanks to DDS). 

### 2. SLAM Toolbox
For mapping unknown environments, `slam_toolbox` provides excellent out-of-the-box performance for 2D LiDARs.

### 3. Navigation2
The Nav2 stack is the successor to the ROS1 Navigation stack. It handles path planning, recovery behaviors, and obstacle avoidance.

## Code Example

Here's a quick snippet of a simple ROS2 publisher written in Python:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello from ROS2!'
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Conclusion
Building a ROS2 robot requires patience, especially when tuning PID controllers and Nav2 parameters. But seeing your creation navigate a room autonomously makes it all worth it.
