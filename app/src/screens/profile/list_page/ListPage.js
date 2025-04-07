import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./list_page_style";

const ListPage = () => {
  return (
    <View style={styles.screen}>
      {/* 상단 바 */}
      <View style={styles.frame2}>
        {/* ❌ 뒤로 가기 버튼 삭제하고 제목만 남김 */}
        <Text style={styles.title}>목록</Text>
      </View>

      {/* 보드 영역 */}
      <View style={styles.frame3}>
        <Text style={styles.sectionTitle}>보드</Text>
        <TouchableOpacity><Text style={styles.button}>· 전체 보드</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.button}>· 중요 보드</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.button}>· PDF</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.button}>· 휴지통</Text></TouchableOpacity>
      </View>

      {/* 녹음 영역 */}
      <View style={styles.frame3}>
        <Text style={styles.sectionTitle}>녹음</Text>
        <TouchableOpacity><Text style={styles.button}>· 전체 녹음</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.button}>· 중요 녹음</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.button}>· 휴지통</Text></TouchableOpacity>
      </View>

      {/* 하단 프로젝트 정보 */}
      <View style={styles.footer}>
        <Text style={styles.teamProject}>
          Team Project. TOnePick {"\n"} Figma
        </Text>
        <Text style={styles.footerText}>
          © 우노. 김세은, 김진영, 박준우, 안성수
        </Text>
      </View>
    </View>
  );
};

export default ListPage;
