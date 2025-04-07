import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./profile_page_style";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      {/* 타이틀 */}
      <Text style={styles.title}>내 정보</Text>

      {/* 프로필 카드 */}
      <TouchableOpacity style={styles.profileCard}>
        <View style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>강양</Text>
          <Text style={styles.profileId}>wlsdud1104</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

	  {/* 여기 실선 추가 */}
  	 <View style={styles.divider} />
      {/* 메뉴 리스트 */}
      <View style={styles.menuList}>
        <Text style={styles.menuItem}>· 아이디 변경하기</Text>
        <Text style={styles.menuItem}>· 비밀번호 변경하기</Text>
        <Text style={styles.menuItem}>· 관리자에게 문의하기</Text>
        <Text style={styles.menuItem}>· 로그아웃</Text>
        <Text style={styles.menuItem}>· 탈퇴하기</Text>
      </View>
    </View>
  );
};

export default ProfilePage;
