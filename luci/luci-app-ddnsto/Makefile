# Copyright (C) 2016-2024 OpenWrt.org
#
# This is free software, licensed under the Apache License, Version 2.0 .
#

include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-ddnsto
PKG_VERSION:=4.0.3
PKG_RELEASE:=1

PKG_MAINTAINER:=jjm2473 <jjm2473@gmail.com>

LUCI_TITLE:=LuCI support for DDNS.to
LUCI_DEPENDS:=+ddnsto +block-mount +luci-lua-runtime
LUCI_PKGARCH:=all

# Support both apk and ipk package formats
PKGARCH:=all

include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature
