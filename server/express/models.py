from django.db import models


# Create your models here.
class Consumer(models.Model):
    openid = models.CharField(null=False, unique=True, max_length=128)
    nickname = models.CharField(null=True, max_length=64)
    sex = models.IntegerField(null=True)
    province = models.CharField(null=True, max_length=24)
    city = models.CharField(null=True, max_length=24)
    country = models.CharField(null=True, max_length=24)
    headimgurl = models.TextField(null=True)
    privilege = models.TextField(null=True)
    unionid = models.CharField(null=True, max_length=64)

    def __str__(self):
        return self.openid


class Employee(models.Model):
    # 投递员姓名
    name = models.CharField(null=False, max_length=24)
    # 投递员电话号码，同时用作登录账号
    tel = models.CharField(null=False, unique=True, max_length=16)
    # 密码
    pwd = models.CharField(null=False, max_length=16)
    # 登录权限控制，允许登录0，禁止登录1
    status = models.IntegerField(null=False, default=0)
    # 登录有效开始时间
    loginDateTime = models.DateTimeField(null=True)
    # 身份证号码
    idSoc = models.CharField(null=True, max_length=32)
    # 学号
    idStu = models.CharField(null=True, max_length=16)
    # 备注
    note = models.TextField(null=True)

    def __str__(self):
        return self.tel


class Pricing(models.Model):
    # 商品价格
    pricing = models.IntegerField(null=False)
    # 商品描述
    desc = models.TextField(null=True)

    def __str__(self):
        return self.id.__str__()


class Building(models.Model):
    building = models.CharField(null=False, unique=True, max_length=24)

    def __str__(self):
        return self.building


class ExpressLoc(models.Model):
    expressLoc = models.CharField(null=False, unique=True, max_length=24)

    def __str__(self):
        return self.expressLoc


class ArrivalTime(models.Model):
    arrivalTime = models.CharField(null=False, unique=True, max_length=24)

    def __str__(self):
        return self.arrivalTime


class Form(models.Model):
    # cnosumer的自动填充
    consumer = models.ForeignKey(Consumer, on_delete=models.CASCADE, to_field='openid')
    # 自动填充字段
    toName = models.CharField(null=True, max_length=24)
    toTel = models.CharField(null=True, max_length=16)
    building = models.ForeignKey(Building, on_delete=models.SET_NULL, to_field='building', null=True)
    cell = models.CharField(null=True, max_length=24)
    signName = models.CharField(null=True, max_length=24)
    signTel = models.CharField(null=True, max_length=16)

    def __str__(self):
        return self.consumer.__str__()


class Order(models.Model):
    # consumer的订单
    consumer = models.ForeignKey(Consumer, on_delete=models.DO_NOTHING, to_field='openid')
    # form信息
    toName = models.CharField(null=False, max_length=24)
    toTel = models.CharField(null=False, max_length=16)
    building = models.ForeignKey(Building, on_delete=models.DO_NOTHING, to_field='building')
    cell = models.CharField(null=False, max_length=24)
    arrivalTime = models.ForeignKey(ArrivalTime, on_delete=models.DO_NOTHING, to_field='arrivalTime')
    signName = models.CharField(null=False, max_length=24)
    signTel = models.CharField(null=False, max_length=16)
    expressLoc = models.ForeignKey(ExpressLoc, on_delete=models.DO_NOTHING, to_field='expressLoc')
    msg = models.TextField(null=False)
    note = models.TextField(null=True)
    # 统一下单
    paid = models.IntegerField(null=False, default=0)

    def __str__(self):
        return self.consumer.__str__()
