import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  StatusBar,
  Platform,
} from "react-native";
import { styles } from "./HomeScreen.styles";

const { width, height } = Dimensions.get("window");

// Status Bar 숨김 처리

const HomeScreen = ({ navigation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const slideAnim = new Animated.Value(0);
  const gallerySlideAnim = new Animated.Value(0);

  // Header 배경 이미지 슬라이드
  const headerImages = [
    require("../public/일월오봉도.webp"),
    require("../public/호랑이와 까치.jpg"),
    require("../public/청자.jpeg"),
  ];

  // Galleries 전시회 정보
  const galleryData = [
    {
      id: 1,
      title: "국립중앙박물관 민화전",
      description: "한국의 전통 민화를 한자리에서 만나보세요",
      image: require("../public/일월오봉도.webp"),
    },
    {
      id: 2,
      title: "민화의 세계 특별전",
      description: "조선시대 민화의 아름다움을 감상하세요",
      image: require("../public/호랑이와 까치.jpg"),
    },
    {
      id: 3,
      title: "현대 민화 작가전",
      description: "현대 작가들의 민화 작품을 만나보세요",
      image: require("../public/청자.jpeg"),
    },
  ];

  // Header 이미지 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % headerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Galleries 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* ===== HEADER SECTION ===== */}
      <View style={styles.header}>
        <Image
          source={headerImages[currentImageIndex]}
          style={styles.headerBackground}
          resizeMode="cover"
        />
        <View style={styles.headerOverlay}>
          <View style={styles.headerTop}>
            <Text style={styles.logo}>민화사진관</Text>
            <View style={styles.headerButtons}>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate("Gallery")}
              >
                <Text style={styles.navButtonText}>갤러리</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate("MinwhaTrans")}
              >
                <Text style={styles.navButtonText}>변환소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.userButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.userButtonText}>로그인</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.userButton}
                onPress={() => navigation.navigate("SignUp")}
              >
                <Text style={styles.userButtonText}>회원가입</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.userButton}
                onPress={() => navigation.navigate("MyAlbum")}
              >
                <Text style={styles.userButtonText}>마이페이지</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* ===== NAV SECTION ===== */}
      <View style={styles.nav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>민화</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>변환소</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>갤러리</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>전시회</Text>
        </TouchableOpacity>
      </View>

      {/* ===== MAIN SECTION ===== */}
      <View style={styles.main}>
        <Text style={styles.sectionTitle}>핵심 기능</Text>
        <View style={styles.mainGrid}>
          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate("Gallery")}
          >
            <Image
              source={require("../public/일월오봉도.webp")}
              style={styles.mainItemImage}
              resizeMode="cover"
            />
            <Text style={styles.mainItemText}>민화</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate("MinwhaTrans")}
          >
            <Image
              source={require("../public/호랑이와 까치.jpg")}
              style={styles.mainItemImage}
              resizeMode="cover"
            />
            <Text style={styles.mainItemText}>민화풍 사진 변환소</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate("Gallery")}
          >
            <Image
              source={require("../public/청자.jpeg")}
              style={styles.mainItemImage}
              resizeMode="cover"
            />
            <Text style={styles.mainItemText}>유저 갤러리</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate("MyAlbum")}
          >
            <Image
              source={require("../public/songhakdo.jpg")}
              style={styles.mainItemImage}
              resizeMode="cover"
            />
            <Text style={styles.mainItemText}>나의 앨범</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ===== GALLERIES SECTION ===== */}
      <View style={styles.galleries}>
        <Text style={styles.sectionTitle}>현재 전시중</Text>
        <View style={styles.galleryContainer}>
          <Animated.View
            style={[
              styles.gallerySlide,
              {
                transform: [
                  {
                    translateX: gallerySlideAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -width],
                    }),
                  },
                ],
              },
            ]}
          >
            {galleryData.map((item, index) => (
              <View key={item.id} style={styles.galleryItem}>
                <Image
                  source={item.image}
                  style={styles.galleryImage}
                  resizeMode="cover"
                />
                <View style={styles.galleryInfo}>
                  <Text style={styles.galleryTitle}>{item.title}</Text>
                  <Text style={styles.galleryDescription}>
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}
          </Animated.View>
        </View>
      </View>

      {/* ===== FOOTER SECTION ===== */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>민화사진관</Text>
            <Text style={styles.footerText}>
              한국의 전통 민화를 현대적으로 재해석하여
            </Text>
            <Text style={styles.footerText}>
              여러분의 일상에 아름다움을 더해드립니다.
            </Text>
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>서비스</Text>
            <Text style={styles.footerText}>민화 갤러리</Text>
            <Text style={styles.footerText}>사진 변환</Text>
            <Text style={styles.footerText}>개인 앨범</Text>
            <Text style={styles.footerText}>전시회 정보</Text>
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>고객지원</Text>
            <Text style={styles.footerText}>문의하기</Text>
            <Text style={styles.footerText}>이용약관</Text>
            <Text style={styles.footerText}>개인정보처리방침</Text>
          </View>
        </View>

        <View style={styles.footerBottom}>
          <Text style={styles.footerCopyright}>
            © 2025 민화사진관. All rights reserved.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
