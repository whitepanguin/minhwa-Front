import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// HomeScreen과 동일한 색상 팔레트 사용
const colors = {
  primary: "#8B7355", // 모카 무스의
  secondary: "#D4C4A8", // 밝은 모카
  accent: "#5D4E37", // 진한 모카
  white: "#FFFFFF",
  black: "#1A1A1A",
  gray: "#F5F5F5",
  darkGray: "#666666",
  lightGray: "#E8E8E8",
  overlay: "rgba(26, 26, 26, 0.3)",
  paperWhite: "#F0F0F0",
  inkBlack: "#333333",
  overlayLight: "rgba(255, 255, 255, 0.2)",
  traditionalBlack: "#222222",
  hanjiDark: "#999999",
  error: "#E74C3C",
  success: "#27AE60",
};

export const styles = StyleSheet.create({
  // 전체 컨테이너
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  // 헤더 스타일
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "web" ? 20 : 50,
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.02,
    backgroundColor: colors.white,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  backButton: {
    width: Math.min(width * 0.08, 40),
    height: Math.min(width * 0.08, 40),
    borderRadius: Math.min(width * 0.08, 40) / 2,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    fontSize: Math.min(width * 0.04, 24),
    color: colors.white,
    fontWeight: "bold",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  headerTitle: {
    fontSize: Math.min(width * 0.035, 22),
    fontWeight: "bold",
    color: colors.traditionalBlack,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  headerSpacer: {
    width: Math.min(width * 0.08, 40),
  },

  // 메인 컨텐츠
  mainContent: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: width * 0.02,
    paddingTop: height * 0.02,
  },

  // 섹션 제목
  sectionTitle: {
    fontSize: Math.min(width * 0.03, 18),
    fontWeight: "bold",
    color: colors.traditionalBlack,
    marginBottom: height * 0.02,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },

  // 왼쪽 섹션 - 이미지 업로드
  leftSection: {
    flex: 2,
    marginRight: width * 0.02,
    paddingHorizontal: width * 0.02,
  },

  // 업로드 영역
  uploadArea: {
    height: height * 0.4,
    borderWidth: 2,
    borderColor: colors.lightGray,
    borderStyle: "dashed",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray,
    marginBottom: height * 0.03,
  },
  uploadIcon: {
    fontSize: Math.min(width * 0.08, 48),
    marginBottom: height * 0.02,
  },
  uploadText: {
    fontSize: Math.min(width * 0.025, 16),
    fontWeight: "600",
    color: colors.traditionalBlack,
    marginBottom: height * 0.01,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  uploadSubtext: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.darkGray,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },

  // 업로드된 이미지 컨테이너
  uploadedImageContainer: {
    height: height * 0.4,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: colors.gray,
    marginBottom: height * 0.03,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
  },
  changeImageButton: {
    position: "absolute",
    bottom: width * 0.02,
    right: width * 0.02,
    backgroundColor: colors.primary,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
    borderRadius: 8,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  changeImageButtonText: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.white,
    fontWeight: "600",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },

  // 변환 버튼
  convertButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: height * 0.02,
    alignItems: "center",
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  convertButtonDisabled: {
    backgroundColor: colors.lightGray,
    shadowOpacity: 0,
    elevation: 0,
  },
  convertButtonText: {
    fontSize: Math.min(width * 0.025, 16),
    fontWeight: "bold",
    color: colors.white,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  // 오른쪽 섹션 - 변환된 이미지 목록
  rightSection: {
    flex: 1,
    paddingHorizontal: width * 0.02,
  },
  convertedImagesList: {
    flex: 1,
  },

  // 빈 상태
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: height * 0.1,
  },
  emptyStateIcon: {
    fontSize: Math.min(width * 0.06, 36),
    marginBottom: height * 0.02,
  },
  emptyStateText: {
    fontSize: Math.min(width * 0.025, 16),
    fontWeight: "600",
    color: colors.traditionalBlack,
    marginBottom: height * 0.01,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  emptyStateSubtext: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.darkGray,
    textAlign: "center",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },

  // 변환된 이미지 아이템
  convertedImageItem: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: height * 0.02,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  convertedImage: {
    width: "100%",
    height: height * 0.15,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  imageInfo: {
    padding: width * 0.02,
  },
  imageTimestamp: {
    fontSize: Math.min(width * 0.018, 12),
    color: colors.darkGray,
    marginBottom: height * 0.01,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  imageActions: {
    flexDirection: "row",
    gap: width * 0.01,
  },
  actionButton: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: height * 0.008,
    borderRadius: 6,
    alignItems: "center",
  },
  actionButtonText: {
    fontSize: Math.min(width * 0.018, 12),
    color: colors.white,
    fontWeight: "600",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  deleteButton: {
    backgroundColor: colors.error,
  },
  deleteButtonText: {
    color: colors.white,
  },

  // 미리보기 팝업
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 16,
    width: "100%",
    maxWidth: width * 0.8,
    maxHeight: height * 0.8,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  modalTitle: {
    fontSize: Math.min(width * 0.035, 20),
    fontWeight: "bold",
    color: colors.traditionalBlack,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  closeButton: {
    width: Math.min(width * 0.06, 32),
    height: Math.min(width * 0.06, 32),
    borderRadius: Math.min(width * 0.06, 32) / 2,
    backgroundColor: colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: Math.min(width * 0.04, 20),
    color: colors.darkGray,
    fontWeight: "bold",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  modalImageContainer: {
    padding: width * 0.04,
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: height * 0.4,
    borderRadius: 12,
  },
  modalActions: {
    flexDirection: "row",
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.03,
    gap: width * 0.02,
  },
  modalActionButton: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: height * 0.015,
    borderRadius: 8,
    alignItems: "center",
  },
  modalActionButtonText: {
    fontSize: Math.min(width * 0.025, 16),
    fontWeight: "600",
    color: colors.white,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  shareButton: {
    backgroundColor: colors.success,
  },
});
