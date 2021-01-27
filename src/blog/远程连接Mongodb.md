---
title: "远程连接Mongodb"
date: "2021-01-27 20:35"
tags: "数据库,Linux,服务器"
categrory: "Tech"
---

如何连接远程服务器并运行Mongodb服务以及如何管理用户。

<!-- end -->

## 服务器配置
我用的是腾讯云的虚拟主机，系统是CentOS7。
1. 首先在服务器端安装好mongodb，并启动：
	```shell
	sudo systemctl start mongod
	sudo systemctl status mongod //查看状态
	```

2. 如果要远程访问，需要配置ip和端口。打开mongodb配置文件：

	```shell
	vim /etc/mongod.conf
	```

	将绑定的ip地址设置为`0.0.0.0`即为允许所有来源访问，默认端口保持27017不变。
	
	```shell
	net:
   		port: 27017
   		bindIp: 0.0.0.0 
	```
	
3. 打开防火墙：
	```shell
	iptables -A INPUT -p tcp -m state --state NEW -m tcp --dport 27017 -j ACCEPT
	```

4. 启动服务：
	
	```shell
	mongod --config /etc/mongod.conf
	```

5. 停止服务
	```shell
	mongod --shutdown --dbpath /var/lib/mongo/
	```
	
## 客户端连接
本地也应该提前安装好mongodb，打开本地终端，输入服务器地址+端口就可以直接登录了。
```shell
mongo 115.159.118.182:27017
```

注意同时使用上面两种方法会产生冲突，如图：

![启动失败](https://picture.mdreame.life/start-mongod-conflict-by-differ-ways.png)

使用第一种方法后再用第二种则启动失败，但是使用第一种方法可以继续登录。

## 添加用户和设置权限
经过上面两步可以正常访问数据库并进行操作了。
但谁都可以访问，并不安全，所以要进行账户控制。下图是用户角色以及其对应的访问权限。

![用户类型](https://picture.mdreame.life/mongodb-users-control.png)

### 添加管理员
选择admin数据库，新建超级用户：
```shell
use admin
db.createUser({
	user: 'admin', 
	pwd: 'JUNGLE250', 
	roles:[{
		role: 'userAdminAnyDatabase', 
		db: 'admin'}]
		})
```

### 添加用户
可以指定一个用户对某个数据库的访问权限：
```shell
db.createUser({
	user: 'win10', 
	pwd: '123456', 
	roles:[{
		role: 'readWrite', 
		db: 'win10db'}]
		})
```

### 查看所有用户
```shell
db.auth('admin', 'JUNGLE250')  //验证当前账户是否有权限登录
db.system.users.find().pretty()  //查看所有用户信息

show users	//查看当前数据库下的用户
```

---

参考：

- [mongodb用户权限管理最全攻略：用户的创建、查看、删除与修改，mongodb入坑之旅](https://segmentfault.com/a/1190000015603831)