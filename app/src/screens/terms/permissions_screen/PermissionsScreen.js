import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './permissions_screen_style'; // 스타일은 따로 관리

export default function PermissionsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>
            TOnePick에서{"\n"}사용되는 권한입니다.
          </Text>
          <Text style={styles.subTitle}>
            선택 권한을 허용하지 않아도 앱을 사용할 수 있으나{"\n"}일부 기능이 제한될 수 있어요
          </Text>
        </View>

        <View style={styles.permissionList}>
          <View style={styles.permissionItem}>
            <Text style={styles.permissionTitle}>마이크 (필수)</Text>
            <Text style={styles.permissionDesc}>
			녹음 및 음성 인식 기능 제공을 위해 사용됩니다.
            </Text>
          </View>

          <View style={styles.permissionItem}>
            <Text style={styles.permissionTitle}>파일 첨부 (필수)</Text>
            <Text style={styles.permissionDesc}>
			녹음 파일 및 관련 자료를 업로드하기 위해 사용됩니다.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.completeButton}>
          <Text style={styles.completeButtonText}>완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
