import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./terms_screen_style";
import { Ionicons } from "@expo/vector-icons"; // 뒤로가기 화살표

export default function TermsScreen() {
  const [allAgree, setAllAgree] = useState(false);
  const [agreements, setAgreements] = useState([false, false, false, false]);

  const termsList = [
    "서비스 이용약관 (필수)",
    "개인정보 수집 및 이용 동의 (필수)",
    "위치정보 이용약관 동의 (선택)",
    "마케팅 정보 수신 동의 (선택)",
  ];

  const toggleAllAgree = () => {
    const newValue = !allAgree;
    setAllAgree(newValue);
    setAgreements(agreements.map(() => newValue));
  };

  const toggleAgreement = (index) => {
    const newAgreements = [...agreements];
    newAgreements[index] = !newAgreements[index];
    setAgreements(newAgreements);
    setAllAgree(newAgreements.every((item) => item)); // 모두 체크되면 allAgree true
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#473b3b" />
        </TouchableOpacity>
        <Text style={styles.title}>이용약관에{'\n'}동의 해주세요.</Text>
        <View style={styles.line} />
      </View>

      {/* 동의 목록 */}
      <View style={styles.agreeBox}>
        {/* 모두 동의 */}
        <TouchableOpacity style={styles.agreeItem} onPress={toggleAllAgree}>
          <Ionicons
            name={allAgree ? "checkbox" : "square-outline"}
            size={24}
            color="#705f5f"
          />
          <Text style={styles.agreeText}>모두 동의</Text>
        </TouchableOpacity>

        {/* 개별 동의 항목들 */}
        {termsList.map((term, index) => (
          <TouchableOpacity
            key={index}
            style={styles.agreeItem}
            onPress={() => toggleAgreement(index)}
          >
            <Ionicons
              name={agreements[index] ? "checkbox" : "square-outline"}
              size={24}
              color="#705f5f"
            />
            <Text style={styles.agreeText}>{term}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 완료 버튼 */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.completeButton}>
          <Text style={styles.completeButtonText}>완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
