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
  const [language, setLanguage] = useState("KOR"); // 언어 상태 추가
  const [hoveredItem, setHoveredItem] = useState(null); // 호버 상태 관리
  const slideAnim = new Animated.Value(0);
  const gallerySlideAnim = new Animated.Value(0);

  // Header 배경 이미지 슬라이드
  const headerImages = [
    // require("../public/일월오봉도.webp"),
    require("../public/traditional-village-7818476.jpg"),
    // require("../public/청자.jpeg"),
  ];

  // Galleries 전시회 정보
  const galleryData = [
    {
      id: 1,
      title: "조선 민화 특별전",
      subtitle: "전통 민화의 아름다움을 만나다",
      description: "국립중앙박물관",
      date: "2025.01.15 ~ 2025.03.30",
      image: require("../public/일월오봉도.webp"),
    },
    {
      id: 2,
      title: "현대 민화 작가전",
      subtitle: "전통과 현대의 조화",
      description: "서울시립미술관",
      date: "2025.02.01 ~ 2025.04.15",
      image: require("../public/호랑이와 까치.jpg"),
    },
    {
      id: 3,
      title: "민화 디지털 아트전",
      subtitle: "AI로 재탄생한 민화",
      description: "디지털아트센터",
      date: "2025.02.10 ~ 2025.05.20",
      image: require("../public/청자.jpeg"),
    },
    {
      id: 4,
      title: "민화 체험 워크샵",
      subtitle: "직접 그리는 민화의 세계",
      description: "민화교육관",
      date: "2025.03.01 ~ 2025.06.30",
      image: require("../public/songhakdo.jpg"),
    },
    {
      id: 5,
      title: "민화 사진 아트전",
      subtitle: "카메라로 담은 민화의 정취",
      description: "사진미술관",
      date: "2025.03.15 ~ 2025.07.15",
      image: require("../public/일월오봉도.webp"),
    },
    {
      id: 6,
      title: "움직이는 민화전",
      subtitle: "생동감 넘치는 민화",
      description: "영상미술관",
      date: "2025.04.01 ~ 2025.08.30",
      image: require("../public/호랑이와 까치.jpg"),
    },
    {
      id: 7,
      title: "공간 속 민화전",
      subtitle: "현대 공간과 어우러진 민화",
      description: "현대미술관",
      date: "2025.04.15 ~ 2025.09.15",
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
      setCurrentGalleryIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= galleryData.length) {
          return 0; // 첫 번째로 돌아가기
        }
        return nextIndex;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryData.length]);

  // 슬라이드 애니메이션 업데이트
  useEffect(() => {
    Animated.timing(gallerySlideAnim, {
      toValue: currentGalleryIndex,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [currentGalleryIndex, gallerySlideAnim]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* ===== HEADER SECTION ===== */}
      <View style={styles.header}>
        <Image
          source={headerImages[currentImageIndex]}
          style={styles.headerBackground}
          resizeMode="cover"
        />
        {/* 배경 어둡게 처리 */}
        <View style={styles.headerGradient} />

        {/* 상단 헤더 */}
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <Text style={styles.logo}>민화 사진관</Text>
            <View style={styles.navMenu}>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>민화 갤러리</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>전시 정보</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>디지털 전시관</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>민화 작업실</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>담소 마당</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.headerRight}>
            {/* 언어 선택 버튼 */}
            <TouchableOpacity
              style={styles.languageButton}
              onPress={() => setLanguage(language === "KOR" ? "ENG" : "KOR")}
            >
              <Text style={styles.languageText}>{language}</Text>
            </TouchableOpacity>

            {/* 사용자 메뉴 */}
            <View style={styles.userMenu}>
              <TouchableOpacity
                style={styles.userButton}
                onPress={() => navigation.navigate("SignUp")}
              >
                <Text style={styles.userButtonText}>회원가입</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.userButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.userButtonText}>로그인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 이미지 슬라이드 버튼 */}
        <TouchableOpacity
          style={styles.slideButton}
          onPress={() =>
            setCurrentImageIndex((prev) => (prev + 1) % headerImages.length)
          }
        >
          <Text style={styles.slideButtonText}>›</Text>
        </TouchableOpacity>
      </View>

      {/* ===== MAIN SECTION ===== */}
      <View style={styles.main}>
        <Text style={styles.sectionTitle}>민화 체험관</Text>
        <View style={styles.mainGrid}>
          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate("Gallery")}
            onMouseEnter={() => setHoveredItem(0)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image
              source={require("../public/일월오봉도.webp")}
              style={styles.mainItemImage}
              resizeMode="cover"
            />
            {hoveredItem === 0 && (
              <>
                <View style={styles.mainItemOverlay} />
                <View style={styles.mainItemTextContainer}>
                  <Text style={styles.mainItemOverlayText}>전통 민화</Text>
                </View>
              </>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate("MinwhaTrans")}
            onMouseEnter={() => setHoveredItem(1)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image
              source={require("../public/호랑이와 까치.jpg")}
              style={styles.mainItemImage}
              resizeMode="cover"
            />
            {hoveredItem === 1 && (
              <>
                <View style={styles.mainItemOverlay} />
                <View style={styles.mainItemTextContainer}>
                  <Text style={styles.mainItemOverlayText}>민화풍 변환</Text>
                </View>
              </>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate("Gallery")}
            onMouseEnter={() => setHoveredItem(2)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image
              source={require("../public/청자.jpeg")}
              style={styles.mainItemImage}
              resizeMode="cover"
            />
            {hoveredItem === 2 && (
              <>
                <View style={styles.mainItemOverlay} />
                <View style={styles.mainItemTextContainer}>
                  <Text style={styles.mainItemOverlayText}>작품 갤러리</Text>
                </View>
              </>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mainItem}
            onPress={() => navigation.navigate("MyAlbum")}
            onMouseEnter={() => setHoveredItem(3)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image
              source={require("../public/songhakdo.jpg")}
              style={styles.mainItemImage}
              resizeMode="cover"
            />
            {hoveredItem === 3 && (
              <>
                <View style={styles.mainItemOverlay} />
                <View style={styles.mainItemTextContainer}>
                  <Text style={styles.mainItemOverlayText}>나의 앨범</Text>
                </View>
              </>
            )}
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
                      inputRange: [0, galleryData.length],
                      outputRange: [
                        0,
                        -(galleryData.length * (window.innerWidth * 0.2)),
                      ],
                    }),
                  },
                ],
              },
            ]}
          >
            {/* 순환 구조를 위해 앞뒤로 데이터 추가 */}
            {[...galleryData, ...galleryData].map((item, index) => (
              <View key={`${item.id}-${index}`} style={styles.galleryCard}>
                <Image
                  source={item.image}
                  style={styles.galleryCardImage}
                  resizeMode="cover"
                />
                <View style={styles.galleryCardOverlay}>
                  <View style={styles.galleryCardContent}>
                    <Text style={styles.galleryCardTitle}>{item.title}</Text>
                    <Text style={styles.galleryCardSubtitle}>
                      {item.subtitle}
                    </Text>
                    <View style={styles.galleryCardInfo}>
                      <Text style={styles.galleryCardLocation}>
                        {item.description}
                      </Text>
                      <Text style={styles.galleryCardDate}>{item.date}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </Animated.View>
        </View>

        {/* 갤러리 슬라이드 버튼 */}
        <TouchableOpacity
          style={styles.gallerySlideButton}
          onPress={() =>
            setCurrentGalleryIndex((prev) => (prev + 1) % galleryData.length)
          }
        >
          <Text style={styles.gallerySlideButtonText}>›</Text>
        </TouchableOpacity>
      </View>

      {/* ===== FOOTER SECTION ===== */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>민화 사진관</Text>
            <Text style={styles.footerText}>
              한국의 전통 민화를 현대적으로 재해석하여
            </Text>
            <Text style={styles.footerText}>
              여러분의 일상에 아름다움을 더해드립니다.
            </Text>
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>서비스</Text>
            <Text style={styles.footerText}>전통 민화 갤러리</Text>
            <Text style={styles.footerText}>민화풍 사진 변환</Text>
            <Text style={styles.footerText}>개인 작품 앨범</Text>
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
            © 2025 민화 사진관. All rights reserved.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
