import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Platform,
  Alert,
} from "react-native";
import { styles } from "./SignUp.styles";

const { width, height } = Dimensions.get("window");

const SignUp = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agreeTerms: false,
    agreeMarketing: false,
  });

  const [errors, setErrors] = useState({});

  // 폼 데이터 업데이트
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // 에러 메시지 초기화
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // 체크박스 토글
  const toggleCheckbox = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // 유효성 검사
  const validateForm = () => {
    const newErrors = {};

    // 이름 검사
    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    } else if (formData.name.length < 2) {
      newErrors.name = "이름은 2자 이상이어야 합니다.";
    }

    // 이메일 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }

    // 비밀번호 검사
    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    } else if (formData.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다.";
    } else if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(formData.password)) {
      newErrors.password = "비밀번호는 영문과 숫자를 포함해야 합니다.";
    }

    // 비밀번호 확인 검사
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호 확인을 입력해주세요.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    // 전화번호 검사 (필수)
    const phoneRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "전화번호를 입력해주세요.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone =
        "올바른 전화번호 형식을 입력해주세요. (예: 010-1234-5678)";
    }

    // 약관 동의 검사
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "이용약관에 동의해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 회원가입 제출
  const handleSignUp = () => {
    if (validateForm()) {
      // TODO: API 호출 로직 추가
      Alert.alert("회원가입 완료", "민화 사진관에 오신 것을 환영합니다!", [
        {
          text: "확인",
          onPress: () => navigation.navigate("HomeScreen"),
        },
      ]);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>회원가입</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* 배경 이미지 */}
      <View style={styles.backgroundContainer}>
        <Image
          source={require("../public/일월오봉도.webp")}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.backgroundOverlay} />
      </View>

      {/* 메인 컨텐츠 */}
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>
            민화 사진관에 오신 것을 환영합니다
          </Text>
          <Text style={styles.subtitleText}>
            아름다운 민화의 세계를 함께 탐험해보세요
          </Text>

          {/* 이름 입력 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>이름 *</Text>
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              placeholder="이름을 입력해주세요"
              value={formData.name}
              onChangeText={(text) => handleInputChange("name", text)}
              placeholderTextColor="#999"
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
          </View>

          {/* 이메일 입력 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>이메일 *</Text>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="이메일을 입력해주세요"
              value={formData.email}
              onChangeText={(text) => handleInputChange("email", text)}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#999"
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>

          {/* 비밀번호 입력 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>비밀번호 *</Text>
            <TextInput
              style={[styles.input, errors.password && styles.inputError]}
              placeholder="8자 이상, 영문과 숫자 포함"
              value={formData.password}
              onChangeText={(text) => handleInputChange("password", text)}
              secureTextEntry
              placeholderTextColor="#999"
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>

          {/* 비밀번호 확인 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>비밀번호 확인 *</Text>
            <TextInput
              style={[
                styles.input,
                errors.confirmPassword && styles.inputError,
              ]}
              placeholder="비밀번호를 다시 입력해주세요"
              value={formData.confirmPassword}
              onChangeText={(text) =>
                handleInputChange("confirmPassword", text)
              }
              secureTextEntry
              placeholderTextColor="#999"
            />
            {errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
          </View>

          {/* 전화번호 입력 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>전화번호 *</Text>
            <TextInput
              style={[styles.input, errors.phone && styles.inputError]}
              placeholder="010-1234-5678"
              value={formData.phone}
              onChangeText={(text) => handleInputChange("phone", text)}
              keyboardType="phone-pad"
              placeholderTextColor="#999"
            />
            {errors.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}
          </View>

          {/* 약관 동의 */}
          <View style={styles.agreementSection}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => toggleCheckbox("agreeTerms")}
            >
              <View
                style={[
                  styles.checkbox,
                  formData.agreeTerms && styles.checkboxChecked,
                ]}
              >
                {formData.agreeTerms && (
                  <Text style={styles.checkboxText}>✓</Text>
                )}
              </View>
              <Text style={styles.checkboxLabel}>
                <Text style={styles.requiredText}>*</Text> 이용약관 및
                개인정보처리방침에 동의합니다
              </Text>
            </TouchableOpacity>
            {errors.agreeTerms && (
              <Text style={styles.errorText}>{errors.agreeTerms}</Text>
            )}

            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => toggleCheckbox("agreeMarketing")}
            >
              <View
                style={[
                  styles.checkbox,
                  formData.agreeMarketing && styles.checkboxChecked,
                ]}
              >
                {formData.agreeMarketing && (
                  <Text style={styles.checkboxText}>✓</Text>
                )}
              </View>
              <Text style={styles.checkboxLabel}>
                마케팅 정보 수신에 동의합니다 (선택)
              </Text>
            </TouchableOpacity>
          </View>

          {/* 회원가입 버튼 */}
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>회원가입</Text>
          </TouchableOpacity>

          {/* 로그인 링크 */}
          <View style={styles.loginLinkContainer}>
            <Text style={styles.loginLinkText}>이미 계정이 있으신가요? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginLink}>로그인하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
